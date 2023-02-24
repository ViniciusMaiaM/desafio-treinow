import { Router } from "express";
import { CreatePersonalStudentController } from "../app/controllers/personalControllers/createStudentController";
const authMiddleware = require('../app/middlewares/auth');

const createPersonalStudentController = new CreatePersonalStudentController();
const personalRoutes = Router();
personalRoutes.use(authMiddleware);

personalRoutes.post("/student", createPersonalStudentController.handle );

export {personalRoutes};
