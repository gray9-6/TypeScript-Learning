import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkout(): string {
        return "hit 100 golf balls daily";
    }

}