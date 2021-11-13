export class CryptoService {
  private static readonly base64chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  constructor() { }

  public static getSecureRandomString(length: number): string {
    return Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => this.base64chars[x % this.base64chars.length])
      .join('');
  }
}
