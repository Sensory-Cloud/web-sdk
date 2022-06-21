import { ISecureTokenStore } from "../../src/interactors/enrollment-token.interactor";

export class SecureTokenStoreExample implements ISecureTokenStore {
  saveData(id: string, data: Uint8Array): void {
    localStorage.setItem(id, data.toString());
  }

  loadData(id: string): Uint8Array {
    let value = localStorage.getItem(id);
    return Uint8Array.from(value.split(',').map(x => parseInt(x, 10)));
  }

  deleteData(id: string): void {
    localStorage.removeItem(id);
  }
}