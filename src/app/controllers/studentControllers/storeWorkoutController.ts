import { Request, Response } from "express";
import { StoreWorkout } from "../../usecases/studentsUseCases/storeWorkout";
import { getUserIdFromToken } from "../../middlewares/getId";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class StoreWorkoutController {
    async handle(req: Request, res: Response) {
        const { start_time } = req.body;
        //Resgatando id do header e fazendo descriptografia do token
        const student_id = getUserIdFromToken(req);

        if(!student_id){
            return res.status(401).json({error: "Unauthorized"});
        }

        try {

            const student = await prisma.user.findUnique({
                where: { id: student_id },
                select: {type: true}
            });

            if (!student || student.type != "aluno") {
                return res.status(400).json({ error: "Student not found" });
            }

            const storeWorkout = new StoreWorkout();
            const workout = await storeWorkout.execute({ start_time, student_id });
            return res.status(201).json(workout);
        } 
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}
