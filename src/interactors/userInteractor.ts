import { User } from "../entities/User";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IUserInteractor } from "../interfaces/IUserinteractor";

export class UserInteractor implements IUserInteractor {
  private repository: IUserRepository;
  constructor(repository: IUserRepository) {
    this.repository = repository;
  }
  async createUser(body: any): Promise<User> {
    return await this.repository.createUser(body);
  }
  async updateUser(id: string, body: any): Promise<User> {
    return await this.repository.updateUser(id, body);
  }
  async deleteUser(id: string): Promise<boolean> {
    return await this.repository.deleteUser(id);
  }
  async getUser(id: string): Promise<User> {
    return await this.repository.getUser(id);
  }
  async getAllUser(): Promise<User[]> {
    return await this.repository.getAllUser();
  }
}
