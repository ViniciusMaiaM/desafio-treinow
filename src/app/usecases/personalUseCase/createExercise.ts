import { PrismaClient, Exercise } from "@prisma/client";
export const prisma = new PrismaClient();

export interface typeexercise{
    name: string,
    duration: number,
    date: Date,
    personal_id: string
}

export class CreateExercise{
    async execute({name,duration,date,personal_id}: typeexercise): Promise<Exercise> {
            
        const exercise = await prisma.exercise.create({
            data:{
                name: name,
                duration: duration,
                date: date,
                personal_id: personal_id
            },
        });
        return exercise;
    }
}
