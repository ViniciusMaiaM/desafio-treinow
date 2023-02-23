import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateUser } from "../../usecases/usersUseCases/createUser";

export const prisma = new PrismaClient();

export class CreateUserController{
    async handle(req: Request, res: Response){
        const{name, email, document, type, password} = req.body;
        try{

            //Verificando se o usuário já existe
            if(await prisma.user.findUnique({where:{email:email}})){
                return res.status(400).send({error:"User already exists!"})
            }

            //Criando usuário
            const create = new CreateUser();
            const user = await create.execute({name,email,document,type,password});

            //Deixandos senha vazia para não ser retornada
            user.password = "";

            return res.status(201).json(user);
        }

        catch(err){
            return res.status(400).send({error: "Registration failed"});
        }
    };
}
