import { ISecureCredentialStore } from '../../src/services/oauth.service';

export class SecureCredentialStoreExample implements ISecureCredentialStore
{
  public saveCredentials(clientId: string, clientSecret: string) {
    localStorage.setItem('clientId', clientId);
    localStorage.setItem('clientSecret', clientSecret);
  }

  async getClientId(): Promise<string> {
    const clientId = localStorage.getItem('clientId')
    return clientId ?? '';
  }

  async getClientSecret(): Promise<string> {
    const clientSecret = localStorage.getItem('clientSecret')
    return clientSecret ?? '';
  }
}
