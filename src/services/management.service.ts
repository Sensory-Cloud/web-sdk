import { Config } from "../config";
import { AppendEnrollmentGroupRequest, CreateEnrollmentGroupRequest, DeleteEnrollmentGroupRequest, DeleteEnrollmentRequest, EnrollmentGroupResponse, EnrollmentResponse, GetEnrollmentGroupsResponse, GetEnrollmentsRequest, GetEnrollmentsResponse } from "../generated/v1/management/enrollment_pb";
import { EnrollmentServiceClient } from "../generated/v1/management/enrollment_pb_service";
import { ITokenManager } from "../managers/token.manager";

/* Service to handle all typical CRUD functions */
export class ManagementService {
  constructor(
    private readonly config: Config,
    private readonly tokenManager: ITokenManager,
    private readonly enrollmentClient = new EnrollmentServiceClient(config.cloud.host)) {
  }
  /**
   * @param  {string} userId
   * @returns Promise
   */
  public async getEnrollments(userId: string): Promise<GetEnrollmentsResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<GetEnrollmentsResponse.AsObject>((resolve, reject) => {
      const request = new GetEnrollmentsRequest();
      request.setUserid(userId);

      this.enrollmentClient.getEnrollments(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }

  /**
   * @param  {string} userId
   * @returns Promise
   */
  public async getEnrollmentGroups(userId: string): Promise<GetEnrollmentGroupsResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<GetEnrollmentGroupsResponse.AsObject>((resolve, reject) => {
      const request = new GetEnrollmentsRequest();
      request.setUserid(userId);

      this.enrollmentClient.getEnrollmentGroups(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }
  /**
   * @param  {string} userId
   * @param  {string} groupId
   * @param  {string} groupName
   * @param  {string} description
   * @param  {string} modelName
   * @param  {string[]} enrollmentIds
   * @returns Promise
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

      this.enrollmentClient.createEnrollmentGroup(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }
  /**
   * @param  {string} groupId
   * @param  {string[]} enrollmentIds
   * @returns Promise
   */
  public async appendEnrollmentGroup(groupId: string, enrollmentIds: string[]): Promise<EnrollmentGroupResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<EnrollmentGroupResponse.AsObject>((resolve, reject) => {
      const request = new AppendEnrollmentGroupRequest();
      request.setGroupid(groupId);
      request.setEnrollmentidsList(enrollmentIds);

      this.enrollmentClient.appendEnrollmentGroup(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }
  /**
   * @param  {string} id
   * @returns Promise
   */
  public async deleteEnrollment(id: string): Promise<EnrollmentResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<EnrollmentResponse.AsObject>((resolve, reject) => {
      const request = new DeleteEnrollmentRequest();
      request.setId(id);

      this.enrollmentClient.deleteEnrollment(request, meta, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }
  /**
   * @param  {string} groupId
   * @returns Promise
   */
  public async deleteEnrollmentGroup(groupId: string): Promise<EnrollmentGroupResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<EnrollmentGroupResponse.AsObject>((resolve, reject) => {
      const request = new DeleteEnrollmentGroupRequest();
      request.setId(groupId);

      this.enrollmentClient.deleteEnrollmentGroup(request, meta, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }
}
