"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new shape_1.Shape(10, 20);
let myCircle = new Circle_1.Circle(30, 40, 50);
let myRectangle = new Rectangle_1.Rectangle(10, 20, 30, 40);
// declare an array of shape ,,, initially empty
let theShapes = [];
// add the shapes to array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
// iterate over the array
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
