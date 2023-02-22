import { Router } from "express";
import { CreateUserController } from "../app/controllers/createUserController";

const createUserController = new CreateUserController();
const userRoutes = Router();

userRoutes.post("/create", createUserController.handle);


export {userRoutes};
