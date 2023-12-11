 import { Shape } from "./shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";



let myCircle = new Circle(30,40,50);
let myRectangle = new Rectangle(10,20,30,40);

// declare an array of shape ,,, initially empty
let theShapes : Shape[] =[];    

// add the shapes to array
theShapes.push(myCircle);
theShapes.push(myRectangle);

// iterate over the array
for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculatedArea());
    console.log();
}

