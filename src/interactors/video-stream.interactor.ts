import { v4 } from "uuid";
import { CompressionTypeMap } from "../generated/common/common_pb";

export type CaptureFrameFunction = () => Promise<Uint8Array>;

export type VideoStreamConfig = {
  compressions: Array<CompressionTypeMap[keyof CompressionTypeMap]>
};

/** Interactor to capture a stream of images from the host device */
export interface IVideoStreamInteractor {
  /**
   * Prompt the user for permission to access video devices.
   * @returns Promise - Will throw an error if permission is declined
   */
  requestPermission(): Promise<void>;

  /**
   * Returns the current video configuration.
   * @returns VideoStreamConfig
   */
  getVideoConfig(): VideoStreamConfig;

  /**
   * Sets the preferred jpeg image quality. Number must be between 0 and 1 (inclusive)
   * @param  {number} quality
   */
   setPreferredJpegImageQuality(quality: number): void

  /**
   * Sets preferred video dimensions. Must be called before startCapturing() is called.
   * @param  {PreferredVideoDimension} width
   * @param  {PreferredVideoDimension} height
   */
   setVideoPreferredDimensions(width: PreferredVideoDimension, height: PreferredVideoDimension): void

  /**
   * Allows setting the ID of the video element rendered on-screen. Images captured by the VideoStreamInteractor
   * will be mirrored to this element. If this Id is not set, a random one will be generated and video will be
   * rendered off-screen.
   * @param  {number} elementId
   * @returns void
   */
  setVideoElementId(elementId: string): void;

  /**
   * Obtains a current list of the supported video devices
   * @returns Promise - array of MediaDeviceInfo objects as detected by the web browser
   */
  getVideoStreamDevices(): Promise<MediaDeviceInfo[]>;

  /**
   * Sets the preferred video listening device. Will error out if a capture is in progress.
   * @param  {string} deviceId - the deviceId found in the MediaDeviceInfo returned from getVideoStreamDevices()
   * @returns void
   */
  setPreferredVideoStreamDevice(deviceId: string): void;

  /**
   * Start the camera and begin rendering to the video element.
   * @returns Promise<CaptureFrameFunction> - returns a callback function that when called will capture a single image.
   */
  startCapturing(): Promise<CaptureFrameFunction>;

  /**
   * End video capturing
   * @returns Promise - promise resolution indicates the video device is stopped
   */
  stopCapturing(): Promise<void>;
}

export type PreferredVideoDimension = {
  min?: number, ideal: number, max?: number
}

/** Interactor provided by the Sensory Cloud SDK to access web browser video using best practices */
export class VideoStreamInteractor implements IVideoStreamInteractor {
  private jpegImageQuality = 0.30;
  private width: PreferredVideoDimension =  { min: 480, ideal: 480 };
  private height: PreferredVideoDimension = { min: 720, ideal: 720 };
  private videoElementId = `video-${v4()}`;
  private preferredDeviceId?: string;
  private stream?: MediaStream;
  private canvas?: HTMLCanvasElement;

  /**
   * Prompt the user for permission to access video devices. Utilizes navigator.mediaDevices.getUserMedia under the hood.
   * @returns Promise - Will throw an error if permission is declined.
   */
  public async requestPermission(): Promise<void> {
    const stream = await this.getVideoStream();
    stream.getTracks().forEach((track) => track.stop());
  }

   /**
   * Returns the current video configuration.
   * @returns VideoStreamConfig
   */
  public getVideoConfig(): VideoStreamConfig {
    return { compressions: [] };
  }

  /**
   * Sets the preferred jpeg image quality. Number must be between 0 and 1 (inclusive)
   * @param  {number} quality
   */
  public setPreferredJpegImageQuality(quality: number) {
    if (quality <= 0 || quality > 1) {
      throw RangeError(`specified Jpeg quality ${quality} must be between 0 and 1 (inclusive)`);
    }

    this.jpegImageQuality = quality;
  }

  /**
   * Sets preferred video dimensions. Must be called before startCapturing() is called.
   * @param  {PreferredVideoDimension} width
   * @param  {PreferredVideoDimension} height
   */
  public setVideoPreferredDimensions(width: PreferredVideoDimension, height: PreferredVideoDimension) {
    this.width = width;
    this.height = height;
  }

  /**
   * Allows setting the ID of the video element rendered on-screen. Images captured by the VideoStreamInteractor
   * will be mirrored to this element. If this Id is not set, a random one will be generated and video will be
   * rendered off-screen.
   * @param  {number} elementId
   * @returns void
   */
  public setVideoElementId(elementId: string) {
    this.videoElementId = elementId;
  }

  /**
   * Obtains a current list of the supported video devices
   * @returns Promise - array of MediaDeviceInfo objects as detected by the web browser
   */
  public async getVideoStreamDevices(): Promise<MediaDeviceInfo[]> {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter((device) => device.kind === 'videoinput');
  }

  /**
   * Sets the preferred video listening device. Will error out if a capture is in progress.
   * @param  {string} deviceId - the deviceId found in the MediaDeviceInfo returned from getVideoStreamDevices()
   * @returns void
   */
  public setPreferredVideoStreamDevice(deviceId: string) {
    this.preferredDeviceId = deviceId;
  }

  /**
   * Start the camera and begin rendering to the video element.
   * @returns Promise<CaptureFrameFunction> - returns a callback function that when called will capture a single image.
   */
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
      console.log(this.jpegImageQuality)

      if (!image) {
        throw new Error('Image not returned from canvas');
      }

      return new Uint8Array(await image.arrayBuffer());
    }

    return takePhoto.bind(this);
  }

  /**
   * End video capturing
   * @returns Promise - promise resolution indicates the video device is stopped
   */
  public async stopCapturing(): Promise<void> {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      delete this.stream;
    }

    if (this.canvas) {
      try {
        document.removeChild(this.canvas);
      } catch(err) {
        // Suppress error
      }

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