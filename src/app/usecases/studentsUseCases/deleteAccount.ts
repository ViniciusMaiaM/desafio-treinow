import { PrismaClient } from "@prisma/client";
const prisma  = new PrismaClient();

export class DeleteAccount{
    async execute(student_id: string){
        await prisma.user.delete({
            where: {id: student_id},
            include: { workouts: true},
        });
    }
}
