import { PrismaClient, Rating } from "@prisma/client";
export const prisma = new PrismaClient();

interface typeRate{
    personal_id: string;
    rating: number;
    user_id: string;
}

export class RatePersonal{
    async execute({ personal_id, rating, user_id}: typeRate): Promise<Rating> {
        //Criando nota
        //Checando se o usuário é aluno do personal

        const newRating = await prisma.rating.create({
            data: {
                value: rating,
                personal: { connect: { id: personal_id } },
                student: { connect: { id: user_id } },
            },
        });

        return newRating;
    
        
    }
}
