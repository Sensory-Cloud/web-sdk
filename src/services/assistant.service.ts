import { Config } from "../config";
import { TextChatRequest, TextChatResponse } from "../generated/v1/assistant/assistant_pb";
import { AssistantServiceClient } from "../generated/v1/assistant/assistant_pb_service";
import { ITokenManager } from "../token-manager/token.manager";

/** Service to handle all typical CRUD functions */
export class AssistantService {
  constructor(
    private readonly tokenManager: ITokenManager,
    private assistantClient: AssistantServiceClient | undefined = undefined) {
  }

  /**
   * Chat's with SensoryCloud's assistant
   * @param  {TextChatRequest} request - the full chat transcript
   * @returns Promise<TextChatResponse.AsObject> - a list of user assistants
   */
  public async getEnrollments(request: TextChatRequest): Promise<TextChatResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<TextChatResponse.AsObject>((resolve, reject) => {
      this.getAssistantClient().textChat(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  private getAssistantClient(): AssistantServiceClient {
    if (this.assistantClient == undefined) {
      this.assistantClient = new AssistantServiceClient(Config.getHost());
    }
    return this.assistantClient;
  }
}
