import { IOauthService } from "../services/oauth.service";

import { grpc } from '@improbable-eng/grpc-web';

export interface ITokenManager {
  getToken(): Promise<string>
  getHeader(): Promise<grpc.Metadata>;
}

export class TokenManager implements ITokenManager {
  private readonly expiresBufferSeconds = 60 * 60; // 1 hour

  private token?: string;
  private expires?: Date;

  constructor(private readonly oauthService: IOauthService) {

  }

  private setToken(token: string, expiresIn: number) {
    const now = new Date();
    this.token = token;
    this.expires = new Date(now.getTime() + (expiresIn - this.expiresBufferSeconds) * 1000)
  }

  public getToken(): Promise<string> {
    // TODO: Stopped here
    const oauthToken = this.oauthService.getToken()
  }

  public async getHeader(): Promise<grpc.Metadata> {
    const meta = new grpc.Metadata();
    const token = await this.getToken();

    meta.set("Authorization", `Bearer ${token}`);
    return meta;
  }
}