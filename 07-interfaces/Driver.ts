import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// declare an empty array
let theCoaches : Coach[] = [];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let coach of theCoaches){
    console.log(coach.getDailyWorkout());
}