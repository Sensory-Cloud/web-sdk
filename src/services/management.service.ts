import { Config } from "../config";
import { AppendEnrollmentGroupRequest, CreateEnrollmentGroupRequest, DeleteEnrollmentGroupRequest, DeleteEnrollmentRequest, EnrollmentGroupResponse, EnrollmentResponse, GetEnrollmentGroupsResponse, GetEnrollmentsRequest, GetEnrollmentsResponse } from "../generated/v1/management/enrollment_pb";
import { EnrollmentServiceClient } from "../generated/v1/management/enrollment_pb_service";
import { ITokenManager } from "../token-manager/token.manager";

/** Service to handle all typical CRUD functions */
export class ManagementService {
  constructor(
    private readonly tokenManager: ITokenManager,
    private enrollmentClient: EnrollmentServiceClient | undefined = undefined) {
  }

  /**
   * Obtains all of the active enrollments given the userId
   * @param  {string} userId - the unique userId
   * @returns Promise<GetEnrollmentsResponse.AsObject> - a list of user enrollments
   */
  public async getEnrollments(userId: string): Promise<GetEnrollmentsResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<GetEnrollmentsResponse.AsObject>((resolve, reject) => {
      const request = new GetEnrollmentsRequest();
      request.setUserid(userId);

      this.getEnrollmentClient().getEnrollments(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  /**
   * Obtains all of the active enrollment groups registered by this userId
   * @param  {string} userId - the unique userId
   * @returns Promise<GetEnrollmentGroupsResponse.AsObject> - a list of enrollment groups
   */
  public async getEnrollmentGroups(userId: string): Promise<GetEnrollmentGroupsResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<GetEnrollmentGroupsResponse.AsObject>((resolve, reject) => {
      const request = new GetEnrollmentsRequest();
      request.setUserid(userId);

      this.getEnrollmentClient().getEnrollmentGroups(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  /**
   * Register a new enrollment group. Enrollment groups can contain up to 10 enrollments, and they enable multiple users to be recognized with the same request.
   * @param  {string} userId - the unique userId who will act as the owner of this enrollment group
   * @param  {string} groupId - the ID to be associated with this group
   * @param  {string} groupName - the friendly name of this group
   * @param  {string} description - a brief description of this group
   * @param  {string} modelName - the exact name of the model tied to this enrollment group. This model name can be retrieved from the getModels() call.
   * @param  {string[]} enrollmentIds - The enrollmentIds to be associated with this group. Max 10.
   * @returns Promise<EnrollmentGroupResponse.AsObject> - a summary of the enrollment group
   */
  public async createEnrollmentGroup(userId: string, groupId: string, groupName: string, description: string, modelName: string, enrollmentIds: string[]): Promise<EnrollmentGroupResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<EnrollmentGroupResponse.AsObject>((resolve, reject) => {
      const request = new CreateEnrollmentGroupRequest();
      request.setId(groupId);
      request.setName(groupName);
      request.setDescription(description);
      request.setModelname(modelName);
      request.setUserid(userId);
      request.setEnrollmentidsList(enrollmentIds);

      this.getEnrollmentClient().createEnrollmentGroup(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  /**
   * Add a new enrollment to an enrollment group.
   * @param  {string} groupId - the ID associated with this group
   * @param  {string[]} enrollmentIds - The enrollmentIds to be associated with this group. Max 10.
   * @returns Promise<EnrollmentGroupResponse.AsObject> - a summary of the enrollment group
   */
  public async appendEnrollmentGroup(groupId: string, enrollmentIds: string[]): Promise<EnrollmentGroupResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<EnrollmentGroupResponse.AsObject>((resolve, reject) => {
      const request = new AppendEnrollmentGroupRequest();
      request.setGroupid(groupId);
      request.setEnrollmentidsList(enrollmentIds);

      this.getEnrollmentClient().appendEnrollmentGroup(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  /**
   * Removes an enrollment from the system
   * @param  {string} id - the unique enrollmentId
   * @returns Promise<EnrollmentResponse.AsObject> - a summary of the removed enrollment
   */
  public async deleteEnrollment(id: string): Promise<EnrollmentResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<EnrollmentResponse.AsObject>((resolve, reject) => {
      const request = new DeleteEnrollmentRequest();
      request.setId(id);

      this.getEnrollmentClient().deleteEnrollment(request, meta, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  /**
   * Removes an enrollment group from the system
   * @param  {string} id - the unique enrollmentGroupId
   * @returns Promise<EnrollmentGroupResponse.AsObject> - a summary of the removed enrollment group
   */
  public async deleteEnrollmentGroup(groupId: string): Promise<EnrollmentGroupResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<EnrollmentGroupResponse.AsObject>((resolve, reject) => {
      const request = new DeleteEnrollmentGroupRequest();
      request.setId(groupId);

      this.getEnrollmentClient().deleteEnrollmentGroup(request, meta, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  private getEnrollmentClient(): EnrollmentServiceClient {
    if (this.enrollmentClient == undefined) {
      this.enrollmentClient = new EnrollmentServiceClient(Config.getHost());
    }
    return this.enrollmentClient;
  }
}
