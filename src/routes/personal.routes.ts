import { Router } from "express";
import { CreatePersonalStudentController } from "../app/controllers/personalControllers/createStudentController";
import { CreateExerciseController } from "../app/controllers/personalControllers/createExerciseController";
import { ListExerciseByIdController } from "../app/controllers/personalControllers/listExerciseByIdController";
const authMiddleware = require('../app/middlewares/auth');

const createPersonalStudentController = new CreatePersonalStudentController();
const createExerciseController = new CreateExerciseController();
const listExerciseByIdController = new ListExerciseByIdController();
const personalRoutes = Router();
personalRoutes.use(authMiddleware);

personalRoutes.post("/student", createPersonalStudentController.handle );
personalRoutes.post("/workout", createExerciseController.handle);
personalRoutes.get("/workout", listExerciseByIdController.handle);

export {personalRoutes};
