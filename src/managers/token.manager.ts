import { IOauthService } from "../services/oauth.service";

import { grpc } from "@improbable-eng/grpc-web";

export interface ITokenManager {
  getToken(): Promise<string>
  getAuthorizationMetadata(): Promise<grpc.Metadata>;
}

/* Manages the rotation and injection of OAuth JWTs */
export class TokenManager implements ITokenManager {
  private readonly expiresBufferSeconds = 60 * 60; // 1 hour

  private token?: string;
  private expires?: Date;

  constructor(private readonly oauthService: IOauthService) {

  }

  /**
   * @returns Promise
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
   * @returns Promise
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