
export type OnImageDataHandler = (bytes: Uint8Array) => void;

export interface ICameraInteractor {
  requestPermission(): Promise<void>;
  // getAudioConfig(): MicrophoneAudioConfig;
  startCapturing(dataIntervalMs: number, onData: OnImageDataHandler): Promise<void>;
  stopCapturing(): Promise<void>;
}

export class CameraInteractor implements ICameraInteractor {
  private readonly width =  480;
  private readonly height =  720;
  private stream?: MediaStream;
  // private mediaRecorder?: IMediaRecorder;

  public async requestPermission(): Promise<void> {
    const stream = await this.getVideoStream();
    stream.getTracks().forEach((track) => track.stop());
  }

  new EventTarget

  private async getVideoStream(): Promise<MediaStream> {
    return navigator.mediaDevices.getUserMedia({ video: { width: this.width, height: this.height } });
  }

  public async startCapturing(doCapture: number, onData: OnImageDataHandler): Promise<void> {

  }

  public async stopCapturing(): Promise<void> {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      delete this.stream;
    }
  }
}