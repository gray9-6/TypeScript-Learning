"use strict";
class Customersss {
    //making the constructor
    // this is parameter property , it will automatically defines the property  and assign them
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// Let's create the instance of this class when we have the constructor 
let myCustomersss = new Customersss("ajay", "kumar");
console.log("first name - " + myCustomersss.firstName);
console.log("last name - " + myCustomersss.lastName);
