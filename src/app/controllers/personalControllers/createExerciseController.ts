import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateExercise } from "../../usecases/personalUseCase/createExercise";
import { getUserIdFromToken } from "../../middlewares/getId";

export const prisma = new PrismaClient();

export class CreateExerciseController{
    async handle(req: Request, res: Response){
        const {name, duration, date} = req.body;
        const personal_id = getUserIdFromToken(req);

        //Validações básicos do body do request
        if(!personal_id){
            return res.status(401).json({error: "Unauthorized"});
        }

        if(!name){
            return res.status(401).json({error: "Name is required"})
        }

        if (!duration || typeof duration !== "number" || duration < 0) {
            return res.status(400).json({ error: "Duration must be a positive number" });
        }
        
        if (!date || isNaN(Date.parse(date))) {
            return res.status(400).json({ error: "Date is invalid" });
        }
        
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
            return res.status(500).json({error: "Internal server error"});
        }
    }
}
