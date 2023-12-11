class Customerss{

    private _firstName : string;
    private _lastName : string;

    //making the constructor
    constructor(theFirst : string, theLast : string){                // theFirst is property and string is the data type
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    // getter 
    /*
        Syntax :- get <space> property()
    */

        public get firstName() : string{
            return this._firstName;
        }

    // setter 
    /*
        syntax :- set <space> property(..)
    */    
   public set firstName(value : string) {
        this._firstName = value;
   }


   public get lastname() : string {
        return this._lastName;
   }

   public set lastName(value : string) {
        this.lastName = value;
   }

}



// Let's create the instance of this class when we have the constructor 
let myCustomers = new Customerss("ajay","kumar");

console.log("first name - " + myCustomers.firstName );
console.log("last name - " + myCustomers.lastName);

