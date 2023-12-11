"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    calculatedArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
    }
    // get and set accessor 
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    // overriding the getInfo()
    getInfo() {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}
exports.Circle = Circle;
