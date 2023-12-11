"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    // constructor
    constructor(theX, theY, _length, _width) {
        super(theX, theY);
        this._length = _length;
        this._width = _width;
    }
    // get and set method 
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    // ovveride getInfo()
    getInfo() {
        return super.getInfo() + `, length=${this._length} , width=${this._width}`;
    }
}
exports.Rectangle = Rectangle;
