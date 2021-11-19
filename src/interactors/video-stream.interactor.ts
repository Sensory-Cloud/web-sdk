import { v4 } from "uuid";
import { CompressionTypeMap } from "../generated/common/common_pb";

export type CaptureFrameFunction = () => Promise<Uint8Array>;

export type VideoStreamConfig = {
  compressions: Array<CompressionTypeMap[keyof CompressionTypeMap]>
};

export interface IVideoStreamInteractor {
  requestPermission(): Promise<void>;
  getVideoConfig(): VideoStreamConfig;
  startCapturing(): Promise<CaptureFrameFunction>;
  stopCapturing(): Promise<void>;
}

export class VideoStreamInteractor implements IVideoStreamInteractor {
  private readonly jpegImageQuality = 0.95;
  private readonly width =  { min: 480, ideal: 480 };
  private readonly height = { min: 720, ideal: 720 };
  private videoElementId = `video-${v4()}`;
  private preferredDeviceId?: string;
  private stream?: MediaStream;
  private canvas?: HTMLCanvasElement;

  public async requestPermission(): Promise<void> {
    const stream = await this.getVideoStream();
    stream.getTracks().forEach((track) => track.stop());
  }

  public setVideoElementId(elementId: string) {
    this.videoElementId = elementId;
  }

  public setPreferredVideoStreamDevice(deviceId: string) {
    this.preferredDeviceId = deviceId;
  }

  public getVideoConfig(): VideoStreamConfig {
    return { compressions: [] };
  }

  public async getVideoStreamDevices(): Promise<MediaDeviceInfo[]> {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device) => device.kind === 'videoinput');
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

    let height = videoElement.videoHeight / (videoElement.videoWidth/this.width.ideal);
    if (isNaN(height)) {
      height = this.width.ideal / (4/3);
    }

    videoElement.setAttribute('height', height.toString());
    videoElement.setAttribute('width', this.width.ideal.toString());

    this.canvas = document.createElement('canvas');
    this.canvas.width = videoElement.videoWidth;
    this.canvas.height = videoElement.videoHeight;

    const takePhoto: CaptureFrameFunction = async () => {
      if (!this.canvas) {
        throw new Error('Canvas is not initialized. Was stopCapturing() called?');
      }

      const context = this.canvas.getContext('2d');
      context?.drawImage(videoElement, 0, 0);

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
    return navigator.mediaDevices.getUserMedia({
      video: {
        width: this.width,
        height: this.height,
        deviceId: this.preferredDeviceId
      }
    });
  }
}