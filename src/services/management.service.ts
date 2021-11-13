import { Config } from "../config";
import { AppendEnrollmentGroupRequest, CreateEnrollmentGroupRequest, DeleteEnrollmentGroupRequest, DeleteEnrollmentRequest, EnrollmentGroupResponse, EnrollmentResponse, GetEnrollmentGroupsResponse, GetEnrollmentsRequest, GetEnrollmentsResponse } from "../generated/v1/management/enrollment_pb";
import { EnrollmentServiceClient } from "../generated/v1/management/enrollment_pb_service";
import { ITokenManager } from "../managers/token.manager";


export class ManagementService {
  private enrollmentClient: EnrollmentServiceClient;

  constructor(private readonly config: Config, private readonly tokenManager: ITokenManager) {
    this.enrollmentClient = new EnrollmentServiceClient(config.cloud.host);
  }

  public async getEnrollments(userId: string): Promise<GetEnrollmentsResponse> {
    const meta = await this.tokenManager.getHeader();

    return new Promise<GetEnrollmentsResponse>((resolve, reject) => {
      const request = new GetEnrollmentsRequest();
      request.setUserid(userId);

      this.enrollmentClient.getEnrollments(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res);
      });
    });
  }

  public async getEnrollmentGroups(userId: string): Promise<GetEnrollmentGroupsResponse> {
    const meta = await this.tokenManager.getHeader();

    return new Promise<GetEnrollmentGroupsResponse>((resolve, reject) => {
      const request = new GetEnrollmentsRequest();
      request.setUserid(userId);

      this.enrollmentClient.getEnrollmentGroups(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res);
      });
    });
  }

  public async createEnrollmentGroup(userId: string, groupId: string, groupName: string, description: string, modelName: string, enrollmentIds: string[]): Promise<EnrollmentGroupResponse> {
    const meta = await this.tokenManager.getHeader();

    return new Promise<EnrollmentGroupResponse>((resolve, reject) => {
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
        return resolve(res);
      });
    });
  }

  public async appendEnrollmentGroup(groupId: string, enrollmentIds: string[]): Promise<EnrollmentGroupResponse> {
    const meta = await this.tokenManager.getHeader();

    return new Promise<EnrollmentGroupResponse>((resolve, reject) => {
      const request = new AppendEnrollmentGroupRequest();
      request.setGroupid(groupId);
      request.setEnrollmentidsList(enrollmentIds);

      this.enrollmentClient.appendEnrollmentGroup(request, meta, async (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res);
      });
    });
  }

  public async deleteEnrollment(id: string): Promise<EnrollmentResponse> {
    const meta = await this.tokenManager.getHeader();

    return new Promise<EnrollmentResponse>((resolve, reject) => {
      const request = new DeleteEnrollmentRequest();
      request.setId(id);

      this.enrollmentClient.deleteEnrollment(request, meta, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res);
      });
    });
  }

  public async deleteEnrollmentGroup(groupId: string): Promise<EnrollmentGroupResponse> {
    const meta = await this.tokenManager.getHeader();

    return new Promise<EnrollmentGroupResponse>((resolve, reject) => {
      const request = new DeleteEnrollmentGroupRequest();
      request.setId(groupId);

      this.enrollmentClient.deleteEnrollmentGroup(request, meta, (err, res) => {
        if (err || !res) {
          return reject(err || Error('No response returned'));
        }
        return resolve(res);
      });
    });
  }
}
