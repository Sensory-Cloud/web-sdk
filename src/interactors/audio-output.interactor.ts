/** Interactor for playing audio on the device's microphone */
export interface IAudioOutputInteractor {
  /**
   * Begins playing audio data over the microphone. Subsequent calls to this function will
   * queue up and begin playing as soon as the previous chunk finishes.
   * The first call to this function *must* include a WAV file header, subsequent calls do not
   * need to include the file header.
   * @param wavData Audio data to play
   * @returns Promise
   */
  play(wavData: Uint8Array): Promise<void>;

  /**
   * Pauses the currently playing audio
   * @returns Promise
   */
  pause(): Promise<void>;

  /**
   * Resumes playing audio
   * @returns Promise
   */
  resume(): Promise<void>;

  /**
   * Closes the audio context, and releases any system resources.
   * @returns Promise
   */
  close(): Promise<void>;
}

/** Interactor provided by the Sensory Cloud SDK to play audio on the browser. A new instance should be used for each audio file */
export class AudioOutputInteractor implements IAudioOutputInteractor {
  private context = new AudioContext();
  private duration = 0;
  private startTime = 0;
  private header?: Uint8Array;

  private readonly riff = new Uint8Array([82, 73, 70, 70]);
  private readonly wave = new Uint8Array([87, 65, 86, 69]);
  private readonly wavHeaderSize = 44;

  /**
   * Begins playing audio data over the microphone. Subsequent calls to this function will
   * queue up and begin playing as soon as the previous chunk finishes.
   * The first call to this function *must* include a WAV file header, subsequent calls do not
   * need to include the file header.
   * @param wavData Audio data to play
   * @returns Promise
   */
  public play(wavData: Uint8Array): Promise<void> {
    return new Promise<void> ((resolve, reject) => {

      var formatted = new Uint8Array(0);
      if (this.hasWavHeader(wavData)) {
        formatted = new Uint8Array(wavData.length);
        formatted.set(wavData);
        this.header = wavData.slice(0, this.wavHeaderSize);
      } else {
        if (!this.header) {
          reject(Error('missing wav file header'))
          return
        }
        formatted = new Uint8Array(this.header.length + wavData.length);
        formatted.set(this.header);
        formatted.set(wavData, this.header.length);
      }

      this.context.decodeAudioData(formatted.buffer, (buffer) => {
        let source = this.context.createBufferSource();
        source.buffer = buffer;
        source.connect(this.context.destination);
        source.start(this.startTime + this.duration);
        if (this.startTime == 0) {
          this.startTime = this.context.currentTime;
        }
        this.duration += buffer.duration;

        resolve();
      }, (error) => {
        reject(error);
      });
    });
  }

  /**
   * Pauses the currently playing audio
   * @returns Promise
   */
  public pause(): Promise<void> {
    return this.context.suspend();
  }

  /**
   * Resumes playing audio
   * @returns Promise
   */
  public resume(): Promise<void> {
    return this.context.resume();
  }

  /**
   * Closes the audio context, and releases any system resources.
   * @returns Promise
   */
  public close(): Promise<void> {
    return this.context.close();
  }

  hasWavHeader(wavData: Uint8Array): boolean {
    // Check data is long enough to contain a header
    if (wavData.length < this.wavHeaderSize) {
      return false;
    }

    // Ensure RIFF file
    for (let i = 0; i < this.riff.length; i++) {
      if (wavData[i] != this.riff[i]) {
        return false;
      }
    }

    // Ensure WAVE file type
    for (let i = 0; i < this.wave.length; i++) {
      if (wavData[i+8] != this.wave[i]) {
        return false;
      }
    }

    return true;
  }
}