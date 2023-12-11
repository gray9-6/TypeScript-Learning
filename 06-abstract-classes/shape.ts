export abstract class Shape{


    // constructor 
    constructor(private _x : number, private _y : number){

    }

    // get and set accessor
    public get x() : number{
        return this.x;
    }

    public set x(value : number) {
        this.x = value;
    }

    public get y() : number{
        return this.y;
    }

    public set y(value : number) {
        this.y = value;
    }

    
    // get info method
    getInfo() : string {
        return `x=${this._x}, y=${this._y}`;
    }

    // abstract method
    abstract calculatedArea() : number;


}