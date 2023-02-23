import { PrismaClient, User } from "@prisma/client";
export const prisma = new PrismaClient();

export interface typeUser{
    name: string;
    email: string;
    document: string;
    type: string;
    password: string
}

export class CreateUser{
    async execute({
        name,
        email,
        document,
        type,
        password
    }: typeUser): Promise<User> {

        //Criptografando senha do usuário
        const bcrypt = require("bcrypt");
        const hash = await bcrypt.hash(password,10);
        password = hash;

        //Criação de usuário
        const newUser = await prisma.user.create({
            data:{
                name: name,
                email: email,
                document: document,
                type: type,
                password: password,
            },
        });
        return newUser;
    }
}
