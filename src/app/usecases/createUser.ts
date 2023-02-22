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
