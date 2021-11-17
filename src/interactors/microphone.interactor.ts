import { AudioConfig } from "../generated/v1/audio/audio_pb";

import { IBlobEvent, IMediaRecorder, MediaRecorder, register } from 'extendable-media-recorder';
import { connect } from 'extendable-media-recorder-wav-encoder';

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

export type MicrophoneAudioConfig = Omit<AudioConfig.AsObject, 'languagecode'>;

export interface IMicrophoneInteractor {
  requestPermission(): Promise<void>;
  getAudioConfig(): MicrophoneAudioConfig;
  startCapturing(dataIntervalMs: number): Promise<IAudioEvent>;
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

export class MicrophoneInteractor {
  private stream?: MediaStream;
  private mediaRecorder?: IMediaRecorder;
  private isRegistered = false;
  private readonly wavHeaderSize = 44;  // Wav header is 44 bytes
  private readonly sampleRate = 16000;
  private readonly channelCount = 1;

  public async requestPermission(): Promise<void> {
    const stream = await this.getAudioStream();
    stream.getTracks().forEach((track) => track.stop());
  }

  public getAudioConfig(): MicrophoneAudioConfig {
    return {
      audiochannelcount: this.channelCount,
      encoding: AudioConfig.AudioEncoding.LINEAR16,
      sampleratehertz: this.sampleRate
    };
  }
  /**
   * @param  {number} dataIntervalMs
   * @param  {OnAudioDataHandler} onData
   * @returns Promise
   */
  public async startCapturing(dataIntervalMs: number): Promise<IAudioEvent> {
    if (this.stream || this.mediaRecorder) {
      throw Error('cannot start listening. A session is already in progress.');
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
        sampleRate: this.sampleRate
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
