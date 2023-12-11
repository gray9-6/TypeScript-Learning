import { Shape } from "./shape";

export class Rectangle extends Shape{
    calculatedArea(): number {
        return this._length*this._width;
    }

    // constructor
    constructor(theX : number , theY : number, private _length : number , private _width : number){
        super(theX,theY);
    }

    // get and set method 
    public get length() : number{
        return this._length;
    }

    public set length(value : number){
        this._length = value;
    }

    // ovveride getInfo()
    getInfo(): string {
        return super.getInfo() + `, length=${this._length} , width=${this._width}`;
    }


}