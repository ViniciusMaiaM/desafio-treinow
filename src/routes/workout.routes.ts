import { Router } from "express";
import { StoreWorkoutController } from "../app/controllers/studentControllers/storeWorkoutController";
import { DeleteAccountController } from "../app/controllers/studentControllers/deleteAccountController";
const authMiddleware = require('../app/middlewares/auth');

const storeWorkoutController = new StoreWorkoutController();
const deleteAccountController = new DeleteAccountController();
const workoutRoutes = Router();
workoutRoutes.use(authMiddleware);

workoutRoutes.post("/store/workout", storeWorkoutController.handle);
workoutRoutes.delete("/account/delete", deleteAccountController.handle);

export {workoutRoutes};
