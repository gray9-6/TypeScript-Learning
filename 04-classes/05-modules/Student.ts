export class Student{

    //making the constructor
    // this is parameter property , it will automatically defines the property  and assign them
    constructor(private _firstName : string, private _lastName : string){                

    }

     public get firstName() : string{
        return this._firstName;
    }

   public set firstName(value : string) {
        this._firstName = value;
   }


   public get lastName() : string {
        return this._lastName;
   }

   public set lastName(value : string) {
        this._lastName = value;
   }

}





