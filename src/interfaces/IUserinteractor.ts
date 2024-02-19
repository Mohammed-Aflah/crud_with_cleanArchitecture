import { User } from "../entities/User";

export interface IUserInteractor {
  createUser(body: any): Promise<User>;
  updateUser(id: string, body: any): Promise<User>;
  deleteUser(id: string): Promise<boolean>;
  getUser(id: string): Promise<User>;
  getAllUser(): Promise<User[]>;
}
