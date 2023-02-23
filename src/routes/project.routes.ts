import { Router } from "express";
import { projectController } from "../app/controllers/userControllers/projectController";
const authMiddleware = require('../app/middlewares/auth');

const project = new projectController();
const projectRoutes = Router();
projectRoutes.use(authMiddleware);

projectRoutes.get("/project", project.handle);


export {projectRoutes};
