import { Shape } from "./shape";

export class Circle extends Shape{
    calculatedArea(): number {
        return Math.PI * Math.pow(this.radius,2);
    }

    constructor(theX : number, theY : number, private _radius : number){
        super(theX,theY);
    }

    // get and set accessor 
    public get radius() : number{
        return this._radius;
    }

    public set radius(value : number) {
        this._radius = value
    }

    // overriding the getInfo()
    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}