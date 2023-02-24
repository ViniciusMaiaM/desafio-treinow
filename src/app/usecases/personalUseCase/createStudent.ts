import { PrismaClient, Personal } from "@prisma/client";
export const prisma = new PrismaClient();

export class CreatePersonalStudent {
    async execute(personalId: string, studentId: string): Promise<void> {
        // Assign the student to the personal
        await prisma.personal.create({
            data: { 
                personal_id: personalId,
                students: { 
                    connect: {
                        id: studentId 
                    } 
                } 
            },
        });
    }
}
