import { Request, Response } from "express";
import { StoreWorkout } from "../../usecases/studentsUseCases/storeWorkout";

export class StoreWorkoutController {
    async handle(req: Request, res: Response) {
        const { start_time, student_id } = req.body;
        try {
            const storeWorkout = new StoreWorkout();
            const workout = await storeWorkout.execute({ start_time, student_id });
            return res.status(201).json(workout);
        } 
        catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}
