import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateExercise } from "../../usecases/personalUseCase/createExercise";

export const prisma = new PrismaClient();

export class CreateExerciseController{
    async handle(req: Request, res: Response){
        const {name, duration, date, personal_id} = req.body;

        try{
            const personal = await prisma.user.findUnique({
                where: { id: personal_id},
                select: {type: true}
            });
            
            if (!personal || personal.type != "personal") {
                return res.status(400).json({ error: "Personal not found" });
            }

            const createexercise = new CreateExercise();
            const exercise = await createexercise.execute({name,duration,date, personal_id});

            return res.status(201).json({
                sucess: "exercise created",
                data: exercise,
            });
        }

        catch(err){
            console.log(err);
            return res.status(500).json({error: "Internal server error"});
        }
    }
}
