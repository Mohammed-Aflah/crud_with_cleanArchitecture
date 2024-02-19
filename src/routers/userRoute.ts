import express from "express";
import { UserController } from "../controller/userController";
import { UserInteractor } from "../interactors/userInteractor";
import { UserRepository } from "../repositories/userRepository";
const userRouter = express.Router();
const repository = new UserRepository();
const interactor = new UserInteractor(repository);
const userController = new UserController(interactor);
userRouter.post("/create-user", userController.createUser.bind(userController));
userRouter.put(
  "/update-user/:id",
  userController.updateUser.bind(userController)
);
userRouter.delete(
  "/delete-user",
  userController.deleteUesr.bind(userController)
);
userRouter.get("/get-user", userController.getUser.bind(userController));
userRouter.get("/get-alluser", userController.getAllUsers.bind(userController));

export default userRouter;
