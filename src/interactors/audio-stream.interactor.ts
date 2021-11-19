import { AudioConfig } from "../generated/v1/audio/audio_pb";

import { IBlobEvent, IMediaRecorder, MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';

export type AudioStreamConfig = Omit<AudioConfig.AsObject, 'languagecode'>;

/* Interactor to capture audio from the host device */
export interface IAudioStreamInteractor {
  /**
   * Prompt the user for permission to access audio devices. Will throw an error if permission is declined.
   * @returns Promise
   */
  requestPermission(): Promise<void>;

  /**
   * Returns the current audio configuration.
   * @returns AudioStreamConfig
   */
  getAudioConfig(): AudioStreamConfig;

  /**
   * Allows adjusting the sampling rate of a stopped AudioStreamInteractor. Should throw an error if a stream is already in progress.
   * @param  {number} sampleRateHz
   * @returns void
   */
  setSampleRate(sampleRateHz: number): void;

  /**
   * Obtains a current list of the supported audio devices
   * @returns Promise - array of MediaDeviceInfo objects as detected by the web browser
   */
  getAudioStreamDevices(): Promise<MediaDeviceInfo[]>;

  /**
   * Sets the preferred audio listening device. Will error out if a capture is in progress.
   * @param  {string} deviceId - the deviceId found in the MediaDeviceInfo returned from getAudioStreamDevices()
   * @returns void
   */
  setPreferredAudioStreamDevice(deviceId: string): void;

  /**
   * Begin capturing audio data at the specified interval.
   * @param  {number} dataIntervalMs
   * @returns Promise - an IAudioEvent, which should be subscribed to. And event will be fired every dataIntervalMs.
   */
  startCapturing(dataIntervalMs: number): Promise<IAudioEvent>;

  /**
   * End audio capturing
   * @returns Promise - promise resolution indicates the audio device is stopped
   */
  stopCapturing(): Promise<void>;
}

type WavHeader = {
  chunkSize: number;
  subChunk1Size: number;
  audioFormat: number;
  numChannels: number;
  sampleRate: number;
  byteRate: number;
  blockAlign: number;
  bitsPerSample: number;
  subChunk2Size: number;
}

/* Interactor provided by the Sensory Cloud SDK to access web browser audio using best practices */
export class AudioStreamInteractor implements IAudioStreamInteractor {
  private stream?: MediaStream;
  private mediaRecorder?: IMediaRecorder;
  private isRegistered = false;
  private sampleRate = 16000;
  private readonly wavHeaderSize = 44;  // Wav header is 44 bytes
  private readonly channelCount = 1;
  private preferredDeviceId?: string;

  /**
   * Request browser permission to access audio devices. Utilizes navigator.mediaDevices.getUserMedia under the hood.
   * @returns Promise - will error out if permission is declined
   */
  public async requestPermission(): Promise<void> {
    const stream = await this.getAudioStream();
    stream.getTracks().forEach((track) => track.stop());
  }
  /**
   * Returns the current audio configuration.
   * @returns AudioStreamConfig
   */
  public getAudioConfig(): AudioStreamConfig {
    return {
      audiochannelcount: this.channelCount,
      encoding: AudioConfig.AudioEncoding.LINEAR16,
      sampleratehertz: this.sampleRate
    };
  }

  /**
   * Allows adjusting the sampling rate of a stopped AudioStreamInteractor. Should throw an error if a stream is already in progress.
   * @param  {number} sampleRateHz
   * @returns void
   */
  setSampleRate(sampleRateHz: number): void {
    if (this.stream || this.mediaRecorder) {
      throw Error('cannot set sampling rate. A session is already in progress.');
    }

    this.sampleRate = sampleRateHz;
  }

  /**
   * Obtains a current list of the supported audio devices
   * @returns Promise - array of MediaDeviceInfo objects as detected by the web browser
   */
  public async getAudioStreamDevices(): Promise<MediaDeviceInfo[]> {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device) => device.kind === 'audioinput');
  }

  /**
   * Sets the preferred audio listening device. Will error out if a capture is in progress.
   * @param  {string} deviceId - the deviceId found in the MediaDeviceInfo returned from getAudioStreamDevices()
   * @returns void
   */
  public setPreferredAudioStreamDevice(deviceId: string) {
    if (this.stream || this.mediaRecorder) {
      throw Error('cannot set preferred deviceId. A session is already in progress.');
    }

    this.preferredDeviceId = deviceId;
  }

  /**
   * Begin capturing audio data at the specified interval.
   * @param  {number} dataIntervalMs
   * @returns Promise - an IAudioEvent, which should be subscribed to. And event will be fired every dataIntervalMs.
   */
  public async startCapturing(dataIntervalMs: number): Promise<IAudioEvent> {
    if (this.stream || this.mediaRecorder) {
      throw Error('cannot start capturing. A session is already in progress.');
    }

    const audioEventTarget = new AudioEventTarget();
    this.stream = await this.getAudioStream();
    this.mediaRecorder = new MediaRecorder(this.stream, { mimeType: 'audio/wav' });

    let wavHeader: WavHeader | undefined;
    this.mediaRecorder.ondataavailable = async (event: IBlobEvent) => {
      let buffer = await event.data.arrayBuffer();
      if (!buffer.byteLength) {
        return;
      }

      // Remove header
      if (!wavHeader) {
        wavHeader = this.parseWavHeader(buffer);
        buffer = buffer.slice(this.wavHeaderSize);
      } else if (!wavHeader) {
        console.error('wavHeader is not set');
        return;
      }

      try {
        const bytes = await this.prepareWavBytes(buffer, wavHeader, this.sampleRate);
        audioEventTarget.dispatch({ bytes });
      } catch (err) {
        console.error(err);
      }

    }

    this.mediaRecorder.start(dataIntervalMs);
    return audioEventTarget;
  }

  /**
   * End audio capturing
   * @returns Promise - promise resolution indicates the audio device is stopped
   */
  public async stopCapturing(): Promise<void> {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
      delete this.mediaRecorder;
    }

    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      delete this.stream;
    }
  }

  private async getAudioStream(): Promise<MediaStream> {
    if (!this.isRegistered) {
      await register(await connect());
    }

    return navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: this.channelCount,
        echoCancellation: true,
        sampleRate: this.sampleRate,
        deviceId: this.preferredDeviceId
      }
    });
  }

  private parseWavHeader(buffer: ArrayBuffer): WavHeader {
    const dataView = new DataView(buffer);

    return {
      chunkSize: dataView.getUint32(4, true),
      subChunk1Size: dataView.getUint32(16, true),
      audioFormat: dataView.getUint8(20),
      numChannels: dataView.getUint8(22),
      sampleRate: dataView.getUint32(24, true),
      byteRate: dataView.getUint32(28, true),
      blockAlign: dataView.getUint8(32),
      bitsPerSample: dataView.getUint8(34),
      subChunk2Size: dataView.getUint32(40, true),
    }
  }

  private prepareWavBytes(buffer: ArrayBuffer, wavHeader: WavHeader, toSampleRate: number): Promise<Uint8Array> {
    const dataView = new DataView(buffer);
    const bytesPerSample = wavHeader.bitsPerSample / 8;
    const fromNumSamples = buffer.byteLength / (bytesPerSample * wavHeader.numChannels);
    const toNumSamples = Math.ceil(fromNumSamples * toSampleRate / wavHeader.sampleRate);

    // Resample inspired by: https://chromium.googlesource.com/experimental/chromium/blink/+/master/LayoutTests/webaudio/audiobuffer-resample.html
    const offlineCtx = new OfflineAudioContext(this.channelCount, toNumSamples, toSampleRate);
    const cloneBuffer = offlineCtx.createBuffer(this.channelCount, fromNumSamples, wavHeader.sampleRate);

    var channelData = cloneBuffer.getChannelData(0);
    for (var i = 0; i < fromNumSamples; i++) {
      const dataIndex = i * wavHeader.numChannels * bytesPerSample; // Take data from a single channel
      channelData[i] = dataView.getInt16(dataIndex, true);
    }

    const source = offlineCtx.createBufferSource();
    source.buffer = cloneBuffer;
    source.connect(offlineCtx.destination);

    return new Promise<Uint8Array>((resolve) => {
      offlineCtx.oncomplete = (event: OfflineAudioCompletionEvent) => {
        const reSampledArray = Int16Array.from(event.renderedBuffer.getChannelData(0));
        resolve(new Uint8Array(reSampledArray.buffer, reSampledArray.byteOffset, reSampledArray.byteLength));
      }

      offlineCtx.startRendering();
      source.start(0);
    });
  }
}

export type AudioEvent = {bytes: Uint8Array};

export interface IAudioEvent {
  addListener(callback: (evt: CustomEvent<AudioEvent>) => void): void
  removeListener(callback: (evt: CustomEvent<AudioEvent>) => void): void
}

export interface IAudioEventTarget extends IAudioEvent {
  dispatch(event: AudioEvent): boolean;
}
export class AudioEventTarget extends EventTarget implements IAudioEventTarget {
  private readonly targetType = 'audio-event';

  addListener(callback: (evt: CustomEvent<AudioEvent>) => void): void {
    return this.addEventListener(this.targetType, callback as (evt: Event) => void);
  }

  dispatch(event: AudioEvent): boolean {
    return this.dispatchEvent(new CustomEvent(this.targetType, { detail: event }));
  }

  removeListener(callback: (evt: CustomEvent<AudioEvent>) => void): void {
    return this.removeEventListener(this.targetType, callback as (evt: Event) => void);
  }
};
