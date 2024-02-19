
import { NextFunction, Request, Response } from "express";
import { IUserInteractor } from "../interfaces/IUserinteractor";
export class UserController {
  private interactor: IUserInteractor;
  constructor(interactor: IUserInteractor) {
    this.interactor = interactor;
  }
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const data = await this.interactor.createUser(body);
      return res.status(200).json({ user: data });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const body = req.body;
      const data = await this.interactor.updateUser(id, body);
      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await this.interactor.getUser(id);
      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async deleteUesr(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await this.interactor.deleteUser(id);
      return res.status(200).json({ status: data });
    } catch (error) {
      next(error);
    }
  }

  async getAllUsers(_: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.interactor.getAllUser();
      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}
