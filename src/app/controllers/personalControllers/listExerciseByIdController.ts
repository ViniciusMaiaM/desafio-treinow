import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ListExerciseById } from "../../usecases/personalUseCase/listExerciseById";
import { getUserIdFromToken } from "../../middlewares/getId";

export const prisma = new PrismaClient();

export class ListExerciseByIdController {
    async handle(req: Request, res: Response){
        //Resgatando id do header e fazendo descriptografia do token
        const personal_id = getUserIdFromToken(req);

        if(!personal_id){
            return res.status(401).json({error: "Unauthorized"});
        }

        try{
            const personal = await prisma.user.findUnique({
                where: {id: personal_id},
                select: {type: true},
            });

            if(!personal || personal.type != "personal"){
                return res.status(400).json({ error: "Personal not found" });
            }


            const listExerciseByID = new ListExerciseById();
            const exercises = await listExerciseByID.execute(personal_id);
            return res.status(200).json(exercises);
        }

        catch(err){
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}
