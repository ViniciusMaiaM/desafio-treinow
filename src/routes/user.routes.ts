import { Router } from "express";
import { CreateUserController } from "../app/controllers/userControllers/createUserController";
import { LoginUserController } from "../app/controllers/userControllers/authController";

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const userRoutes = Router();

userRoutes.post("/create", createUserController.handle);
userRoutes.get("/auth", loginUserController.handle);

export {userRoutes};
