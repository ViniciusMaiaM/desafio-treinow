import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { RatePersonal } from '../../usecases/studentsUseCases/ratePersonal';
import { getUserIdFromToken } from '../../middlewares/getId';

export const prisma = new PrismaClient();

export class RatePersonalController {
    async handle(req: Request, res: Response) {
        const { rating } = req.body;
        const { personal_id } = req.params;
        //Resgatando id do header e fazendo descriptografia do token
        const student_id = getUserIdFromToken(req);

        const ratePersonal = new RatePersonal();
        const personal = await prisma.personal.findUnique({
            where: { personal_id },
            include: {
                students: true,
                personal: true,
            },
        });

        if (!personal || !personal.students.length) {
            throw new Error(
                'Personal not found or user is not a student of this personal'
            );
        }

        const isStudent = personal.students.some(
            (student) => student.id === student_id
        );

        if (!isStudent) {
            throw new Error("The student is not a personal's student");
        }

        try {
            if (student_id === null) throw new Error('Student not found');

            const newRating = await ratePersonal.execute({
                personal_id,
                rating,
                user_id: student_id,
            });
            return res.status(200).json(newRating);
        } catch (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}
