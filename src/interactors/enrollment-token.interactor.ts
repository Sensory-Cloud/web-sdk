import { EnrollmentToken } from "../generated/common";

/**
 * Manages the secure storage and expiration of enrollment tokens
 */
export interface IEnrollmentTokenInteractor {
  /**
   * Securely saves a new enrollment token for the given enrollment ID
   * if a token is already saved for the enrollment ID, the previous token will be deleted
   * @param enrollmentID enrollment ID for the token to save
   * @param token enrollment token object returned by the Sensory Cloud server
   */
  saveEnrollmentToken(enrollmentID: string, token: EnrollmentToken): void;

  /**
   * Retrieves a saved enrollment token from secure storage
   * @param enrollmentID enrollment ID to get the enrollment token for
   * @returns the enrollment token, or undefined if no token was found
   * @throws if the enrollment token has expired
   */
  getEnrollmentToken(enrollmentID: string): Uint8Array | undefined;

  /**
   * Deletes a saved enrollment token
   * @param enrollmentID the enrollment ID of the token to delete
   */
  deleteEnrollmentToken(enrollmentID: string): void;
}

/* Secure data store */
export interface ISecureTokenStore {
  /**
   * Saves arbitrary data
   * @param id id to save data under
   * @param data the data to save
   */
  saveData(id: string, data: Uint8Array): void;
  /**
   * Saves arbitrary data
   * @param id id to load for
   * @returns the data, or undefined if no saved data was found
   */
  loadData(id: string): Uint8Array | undefined;
  /**
   * Deletes arbitrary data
   * No error should be thrown when deleting data for an unknown id
   * @param id id to delete
   */
  deleteData(id: string): void;
}

/**
 * Manages the secure storage and expiration of enrollment tokens
 */
export class EnrollmentTokenInteractor implements IEnrollmentTokenInteractor {
  private readonly tokenSuffix = "_TOKEN";
  private readonly expiresSuffix = "_EXPIRES";

  constructor(private readonly secureTokenStore: ISecureTokenStore) {}

  /**
   * Securely saves a new enrollment token for the given enrollment ID
   * if a token is already saved for the enrollment ID, the previous token will be deleted
   * @param enrollmentID enrollment ID for the token to save
   * @param token enrollment token object returned by the Sensory Cloud server
   */
  public saveEnrollmentToken(enrollmentID: string, token: EnrollmentToken): void {
    this.deleteEnrollmentToken(enrollmentID);

    this.secureTokenStore.saveData(enrollmentID + this.tokenSuffix, token.getToken_asU8());

    if (token.getExpiration() > 0) {
      let expirationDate = new Date(Date.now() + (token.getExpiration() * 1000));
      let expiration = this.numToBytes(expirationDate.getTime());
      this.secureTokenStore.saveData(enrollmentID + this.expiresSuffix, expiration);
    }
  }

  /**
   * Retrieves a saved enrollment token from secure storage
   * @param enrollmentID enrollment ID to get the enrollment token for
   * @returns the enrollment token, or undefined if no token was found
   * @throws if the enrollment token has expired
   */
  public getEnrollmentToken(enrollmentID: string): Uint8Array | undefined {

    let token = this.secureTokenStore.loadData(enrollmentID + this.tokenSuffix);
    if (token == undefined) {
      return undefined;
    }

    let expirationBytes = this.secureTokenStore.loadData(enrollmentID + this.expiresSuffix);
    if (expirationBytes == undefined) {
      return token;
    }

    let expiration = this.bytesToNum(expirationBytes);
    if (Date.now() > expiration) {
      this.deleteEnrollmentToken(enrollmentID);
      throw new Error("Enrollment token has expired");
    }

    return token;
  }

  /**
   * Deletes a saved enrollment token
   * @param enrollmentID the enrollment ID of the token to delete
   */
  public deleteEnrollmentToken(enrollmentID: string): void {
    this.secureTokenStore.deleteData(enrollmentID + this.tokenSuffix);
    this.secureTokenStore.deleteData(enrollmentID + this.expiresSuffix);
  }

  private numToBytes(num: number): Uint8Array {
    const len = Math.ceil(Math.log2(num)/8);
    const byteArray = new Uint8Array(len);

    for (let i = 0; i < byteArray.length; i++) {
      const byte = num & 0xff;
      byteArray[i] = byte;
      num = num >> 2;
    }

    return byteArray
  }

  private bytesToNum(bytes: Uint8Array): number {
    let result = 0;
    for (let i = bytes.length - 1; i >= 0; i--) {
      result = (result << 2) + bytes[i];
    }
    return result;
  }
}
