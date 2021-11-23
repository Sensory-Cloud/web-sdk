import { IOauthService } from "../services/oauth.service";

import { grpc } from "@improbable-eng/grpc-web";

/** Manages the rotation and injection of OAuth JWTs into requests */
export interface ITokenManager {
  /**
   * Get a token.
   * @returns Promise<string> - the token
   */
  getToken(): Promise<string>
  /**
   * Get a token wrapped in grpc metadata.
   * @returns Promise<grpc.Metadata>
   */
  getAuthorizationMetadata(): Promise<grpc.Metadata>;
}

/** Manages the rotation and injection of OAuth JWTs into grpc requests */
export class TokenManager implements ITokenManager {
  private readonly expiresBufferSeconds = 60 * 60; // 1 hour

  private token?: string;
  private expires?: Date;

  constructor(private readonly oauthService: IOauthService) {}

  /**
   * Gets a cached local token if the token exists and is not expired. Otherwise, requests a new token from Sensory Cloud.
   * @returns Promise - containing the token
   */
  public async getToken(): Promise<string> {
    if (this.token && this.expires && new Date() < this.expires) {
      return this.token;
    }

    const oauthToken = await this.oauthService.getToken();
    this.setToken(oauthToken.token, oauthToken.expires);

    return oauthToken.token;
  }
  /**
   * A helper function for grpc calls. Returns the getToken() call packed into grpc Metadata.
   * @returns Promise<grpc.Metadata>
   */
  public async getAuthorizationMetadata(): Promise<grpc.Metadata> {
    const meta = new grpc.Metadata();
    const token = await this.getToken();

    meta.set("Authorization", `Bearer ${token}`);
    return meta;
  }


  private setToken(token: string, expires: Date) {
    this.token = token;
    this.expires = new Date(expires.getTime() - this.expiresBufferSeconds * 1000)
  }
}