import { PrismaClient, Exercise } from "@prisma/client";
// import authMiddleware, { decodeJwt, DecodedJwt } from "../../middlewares/auth";

export const prisma = new PrismaClient();

export class ListExerciseById{
    async execute(personal_id: string): Promise<Exercise[]>{
        // const decodedToken = decodeJwt(token);

        // if (!decodedToken) {
        //     throw new Error("Invalid token");
        // }

        // const { id } = decodedToken.decoded as DecodedJwt;

        const exercises = await prisma.exercise.findMany({
            where:{
                personal_id,
            },
        });

        return exercises;
    }
}
