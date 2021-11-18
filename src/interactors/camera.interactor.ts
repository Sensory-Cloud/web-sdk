import { v4 } from "uuid";

export type CaptureFrameFunction = () => Promise<Uint8Array>;

export interface ICameraInteractor {
  requestPermission(): Promise<void>;
  // getAudioConfig(): MicrophoneAudioConfig;
  startCapturing(): Promise<CaptureFrameFunction>;
  stopCapturing(): Promise<void>;
}

export class CameraInteractor implements ICameraInteractor {
  private readonly jpegImageQuality = 0.95;
  private readonly width =  480;
  // private readonly height =  720;
  private readonly videoElementId = `video-${v4()}`; // TODO: Allow setting of this selector
  private stream?: MediaStream;
  private canvas?: HTMLCanvasElement;

  // TODO: ALLOW DEVICE SELECT

  public async requestPermission(): Promise<void> {
    const stream = await this.getVideoStream();
    stream.getTracks().forEach((track) => track.stop());
  }

  public async startCapturing(): Promise<CaptureFrameFunction> {
    if (this.stream) {
      throw Error('cannot start capturing. A session is already in progress.');
    }

    this.stream = await this.getVideoStream();

    const element = document.getElementById(this.videoElementId);
    let videoElement: HTMLVideoElement;
    if (!element || !(element instanceof HTMLVideoElement)) {
      videoElement = document.createElement('video');
      videoElement.setAttribute('id', this.videoElementId);
    } else {
      videoElement = element;
    }

    videoElement.srcObject = this.stream;
    videoElement.play();

    // Wait for video to be ready
    await new Promise<void>((resolve) => videoElement?.addEventListener('canplay', (_) => resolve()));

    const height = videoElement.videoHeight / (videoElement.videoWidth/this.width);
    videoElement.setAttribute('height', height.toString());
    videoElement.setAttribute('width', this.width.toString());

    this.canvas = document.createElement('canvas');
    this.canvas.width = videoElement.videoWidth;
    this.canvas.height = videoElement.videoHeight;

    const context = this.canvas.getContext('2d');
    context?.drawImage(videoElement, 0, 0, videoElement.videoWidth, videoElement.videoHeight, 0, 0, 256, 256);

    const takePhoto: CaptureFrameFunction = async () => {
      if (!this.canvas) {
        throw new Error('Canvas is not initialized. Was stopCapturing() called?');
      }

      const image = await new Promise<Blob | null>((res) => this.canvas?.toBlob(res, 'image/jpeg', this.jpegImageQuality));

      if (!image) {
        throw new Error('Image not returned from canvas');
      }

      return new Uint8Array(await image.arrayBuffer());
    }

    return takePhoto.bind(this);
  }

  public async stopCapturing(): Promise<void> {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      delete this.stream;
    }

    if (this.canvas) {
      document.removeChild(this.canvas);
      delete this.canvas;
    }
  }

  private async getVideoStream(): Promise<MediaStream> {
    return navigator.mediaDevices.getUserMedia({ video: { width: this.width } });
  }
}