import { Router } from "express";
import { userRoutes } from "./user.routes";
import { workoutRoutes } from "./workout.routes";

const routes = Router();

routes.use("/user",userRoutes);
routes.use("/", workoutRoutes);

export {routes};
