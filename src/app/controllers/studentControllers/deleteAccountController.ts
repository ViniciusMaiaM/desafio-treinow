import { Request, Response } from "express";
import { DeleteAccount } from "../../usecases/studentsUseCases/deleteAccount";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class DeleteAccountController{
    async handle(req: Request, res: Response){
        const {id}= req.body;
        
        try{
            if (!(await prisma.user.findUnique({ where: { id: id } }))) {
                return res.status(400).json({ error: "User not found" });
            }

            const deleteAccount = new DeleteAccount();
            await deleteAccount.execute(id);

            return res.status(200).json({
                sucess: "Account deleted",
            });
        }

        catch(err){
            return res.status(500).json({error: "Internal server error"});
        }
    }
}
