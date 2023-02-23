import { Router } from "express";
import { userRoutes } from "./user.routes";
import { projectRoutes} from "./project.routes";

const routes = Router();

routes.use("/user",userRoutes);
routes.use("/teste",projectRoutes);

export {routes};
