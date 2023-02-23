import { PrismaClient, Workout } from "@prisma/client";
export const prisma = new PrismaClient();

export interface typeWorkout {
    start_time: Date;
    student_id: string;
}

export class StoreWorkout {
    async execute({ start_time, student_id }: typeWorkout): Promise<Workout> {
        const newWorkout = await prisma.workout.create({
        data: {
            start_time: start_time,
            student: {
            connect: {
                id: student_id, //Conexão com usuário com base no id fornecido
            },
            },
        },
        });
        return newWorkout;
    }
}
