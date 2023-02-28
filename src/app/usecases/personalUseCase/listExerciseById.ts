import { PrismaClient, Exercise } from "@prisma/client";

export const prisma = new PrismaClient();

export class ListExerciseById{
    async execute(personal_id: string): Promise<Exercise[]>{

        const exercises = await prisma.exercise.findMany({
            where:{
                personal_id,
            },
        });

        return exercises;
    }
}
