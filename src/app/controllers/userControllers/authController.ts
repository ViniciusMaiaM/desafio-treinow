import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { generateToken } from "../../../config/generateToken";

export const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

export class LoginUserController{
    async handle(req: Request, res: Response){
        const{email, password} = req.body;
        try{
            //Encontrar usuário pelo email
            const user = await prisma.user.findUnique({where:{email:email}});
    
            //Confirmação de que existe um usuário com este email
            if(!user){
                return res.status(400).send({error:"User not found"});
            }
    
            //Comparação entre senhas
            if(!await bcrypt.compare(password, user.password)){ 
                return res.status(400).send({error: "Invalid password"});
            }
    
            //Criação de token baseado no id do usuário
            res.status(200).json({token:generateToken({id:user.id})});
        }

        catch(err){
            return res.status(500).json({ message: "Authentication failed" });
        }
    };
}
