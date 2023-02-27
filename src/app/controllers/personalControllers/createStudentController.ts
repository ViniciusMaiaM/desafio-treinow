import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreatePersonalStudent } from "../../usecases/personalUseCase/createStudent";
import { getUserIdFromToken } from "../../middlewares/getId";
export const prisma = new PrismaClient();


export class CreatePersonalStudentController {
    async handle(req: Request, res: Response) {
        const { student_id } = req.body;
        const personal_id = getUserIdFromToken(req);

        if(!personal_id){
            return res.status(401).json({error: "Unauthorized"});
        }

        if (!student_id) {
            return res.status(400).json({ error: "Student Id is required" });
        }

        try {
            const personal = await prisma.user.findUnique({
                where: { id: personal_id},
                select: {type: true}
            });
            
            if (!personal || personal.type != "personal") {
                return res.status(400).json({ error: "Personal not found" });
            }

            const student = await prisma.user.findUnique({
                where: { id: student_id},
                select: {type: true}
            });
            
            if (!student || student.type != "aluno") {
                return res.status(400).json({ error: "Student not found" });
            }

            const createPersonalStudent = new CreatePersonalStudent();
            await createPersonalStudent.execute(personal_id, student_id);

            return res.status(201).json({
                success: "Student added to personal",
            });
        } 
        
        catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}
