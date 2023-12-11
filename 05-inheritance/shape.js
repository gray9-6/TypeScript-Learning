"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    // constructor 
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // get and set accessor
    get x() {
        return this.x;
    }
    set x(value) {
        this.x = value;
    }
    get y() {
        return this.y;
    }
    set y(value) {
        this.y = value;
    }
    // get info method
    getInfo() {
        return `x=${this._x}, y=${this._y}`;
    }
}
exports.Shape = Shape;
