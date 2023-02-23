import { Router } from "express";
import { StoreWorkoutController } from "../app/controllers/studentControllers/storeWorkoutController";
const authMiddleware = require('../app/middlewares/auth');

const storeWorkoutController = new StoreWorkoutController();
const workoutRoutes = Router();
workoutRoutes.use(authMiddleware);

workoutRoutes.post("/store/workout", storeWorkoutController.handle);

export {workoutRoutes};
