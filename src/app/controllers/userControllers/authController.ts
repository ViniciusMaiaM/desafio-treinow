import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { generateToken } from "../../../config/generateToken";

export const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

export class LoginUserController{
    async handle(req: Request, res: Response){
        const{email, password} = req.body;
        const user = await prisma.user.findUnique({where:{email:email}});

        //Confirmação de que existe um usuário com este email
        if(!user){
            return res.status(400).send({error:"User not found"});
        }

        //Comparação entre senhas
        if(!await bcrypt.compare(password, user.password)){ 
            return res.status(400).send({error: "Invalid password"});
        }

        res.send({
            token: generateToken({id: user.id})
            //Criação de token baseado no id do usuário
        });
    };
}
