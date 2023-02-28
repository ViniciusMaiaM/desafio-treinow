import { PrismaClient } from '@prisma/client';
export const prisma = new PrismaClient();

export class CreatePersonalStudent {
    async execute(personalId: string, studentId: string): Promise<void> {
        const personalExists = await prisma.personal.findUnique({
            where: { personal_id: personalId },
            include: { students: true },
        });

        if (!personalExists) {
            await prisma.personal.create({
                data: {
                personal_id: personalId,
                students: { connect: { id: studentId } },
                },
            });
        }
        
        else {
            const studentIsRegistered = personalExists.students.some(
                (student) => student.id === studentId
            );

            if (!studentIsRegistered) {
                await prisma.personal.update({
                    where: { personal_id: personalId },
                    data: { students: { connect: { id: studentId } } },
                });
            } 
            else {
                throw new Error(
                'CreatePersonalStudent(execute): Student already exists'
                );
            }
        }
    }
}
