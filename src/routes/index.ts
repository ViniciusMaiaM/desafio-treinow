import { Router } from "express";
import { userRoutes } from "./user.routes";
import { workoutRoutes } from "./workout.routes";
import { personalRoutes } from "./personal.routes";

const routes = Router();

routes.use("/user",userRoutes);
routes.use("/", workoutRoutes);
routes.use("/personal", personalRoutes);

export {routes};
