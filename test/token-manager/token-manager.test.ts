import { TokenManager, IOauthService, OauthClient, OauthToken } from '../../dist';
import { DeviceResponse } from '../../dist/generated/v1/management/device_pb';

class MockOAuthService implements IOauthService {
  public countGetTokenWasCalled = 0;

  constructor(public oauthToken: OauthToken) {}

  register(deviceName: string, credential: string): Promise<DeviceResponse.AsObject> {
    throw new Error('Method not implemented.');
  }

  generateCredentials(): OauthClient {
    throw new Error('Method not implemented.');
  }

  async getToken(): Promise<OauthToken> {
    this.countGetTokenWasCalled++;
    return this.oauthToken;
  }

}

// TODO: stopped here with weird compile error
// https://stackoverflow.com/questions/35756479/does-jest-support-es6-import-export

describe("test getToken", () => {
  it("should fetch a new token from OAuthService if none is populated", async () => {

    const oauthToken: OauthToken = { token: 'doesnt-matter', expires: new Date() };
    const mockOAuthService = new MockOAuthService(oauthToken);
    const tokenManager = new TokenManager(mockOAuthService);

    const token = await tokenManager.getToken()
    expect(token).toBeDefined();
    expect(mockOAuthService.countGetTokenWasCalled).toBe(1);
  });

  // it("should return 5 for add(2,3)", async () => {
  //   expect(add(2, 3)).toBe(5);
  // });
});