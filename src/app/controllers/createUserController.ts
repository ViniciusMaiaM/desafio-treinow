import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateUser } from "../usecases/createUser";

export const prisma = new PrismaClient();

export class CreateUserController{
    async handle(req: Request, res: Response){
        const{name, email, document, type, password} = req.body;
        try{

            //Verificando se já existe um usuário com mesmo email ou documento
            if(await prisma.user.findUnique({where:{email:email}})){
                return res.status(400).send({error:"User already exists!"})
            }

            //Criando usuário
            const create = new CreateUser();
            const user = await create.execute({name,email,document,type,password});

            return res.send({
                user
            },);
        }

        catch(err){
            return res.status(400).send({error: "Registration failed"});
        }
    };
}
