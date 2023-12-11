import { Shape } from "./shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";



let myShape = new Shape(10,20);
console.log(myShape.getInfo());


let myCircle = new Circle(30,40,50);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(10,20,30,40);
console.log(myRectangle.getInfo());

