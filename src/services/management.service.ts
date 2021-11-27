import { Config } from "../config";
import { DeviceGetWhoAmIRequest, DeviceResponse } from "../generated/v1/management";
import { DeviceServiceClient } from "../generated/v1/management/device_pb_service";
import { AppendEnrollmentGroupRequest, CreateEnrollmentGroupRequest, DeleteEnrollmentGroupRequest, DeleteEnrollmentRequest, EnrollmentGroupResponse, EnrollmentResponse, GetEnrollmentGroupsResponse, GetEnrollmentsRequest, GetEnrollmentsResponse } from "../generated/v1/management/enrollment_pb";
import { EnrollmentServiceClient } from "../generated/v1/management/enrollment_pb_service";
import { ITokenManager } from "../token-manager/token.manager";

/** Service to handle all typical CRUD functions */
export class ManagementService {
  constructor(
    private readonly config: Config,
    private readonly tokenManager: ITokenManager,
    private readonly enrollmentClient = new EnrollmentServiceClient(config.cloud.host),
    private readonly deviceClient = new DeviceServiceClient(config.cloud.host)) {
  }
  /**
   * Gets information about the current device. The device information is
   * inferred via the OAuth token passed in.
   *
   * @returns Promise - containing information about the device
   */
  public async getWhoAmI(): Promise<DeviceResponse.AsObject> {
    const meta = await this.tokenManager.getAuthorizationMetadata();

    return new Promise<DeviceResponse.AsObject>((resolve, reject) => {
      const request = new DeviceGetWhoAmIRequest();

      this.deviceClient.getWhoAmI(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
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

      this.enrollmentClient.getEnrollments(request, meta, async (err, res) => {
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

      this.enrollmentClient.getEnrollmentGroups(request, meta, async (err, res) => {
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

      this.enrollmentClient.createEnrollmentGroup(request, meta, async (err, res) => {
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

      this.enrollmentClient.appendEnrollmentGroup(request, meta, async (err, res) => {
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

      this.enrollmentClient.deleteEnrollment(request, meta, (err, res) => {
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

      this.enrollmentClient.deleteEnrollmentGroup(request, meta, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res.toObject());
      });
    });
  }
}
