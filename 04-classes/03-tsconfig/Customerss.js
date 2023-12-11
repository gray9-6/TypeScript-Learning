"use strict";
class Customerss {
    //making the constructor
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    // getter 
    /*
        Syntax :- get <space> property()
    */
    get firstName() {
        return this._firstName;
    }
    // setter 
    /*
        syntax :- set <space> property(..)
    */
    set firstName(value) {
        this._firstName = value;
    }
    get lastname() {
        return this._lastName;
    }
    set lastName(value) {
        this.lastName = value;
    }
}
// Let's create the instance of this class when we have the constructor 
let myCustomers = new Customerss("ajay", "kumar");
console.log("first name - " + myCustomers.firstName);
console.log("last name - " + myCustomers.lastName);
