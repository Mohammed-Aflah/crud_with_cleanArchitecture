import { Model } from "mongoose";
import { User } from "../entities/User";
import { IUserRepository } from "../interfaces/IUserRepository";
import userModel from "../adapters/database/mongoose/Schema";
export class UserRepository implements IUserRepository {
  async createUser(body: User): Promise<User> {
    const user = await userModel.create(body);
    return user;
  }
  async updateUser(id: string, body: any): Promise<User | any> {
    const user = await userModel.updateOne({ _id: id }, { $set: body });
    return user;
  }
  async deleteUser(id: string): Promise<boolean> {
    const result = await userModel.deleteOne({ _id: id });
    return result.deletedCount !== 0;
  }
  async getUser(id: string): Promise<User | any> {
    const user = await userModel.findById(id);
    return user ? user.toObject() : null;
  }
  getAllUser(): Promise<User[]> {
    const users = userModel.find({});
    return users;
  }
}
