var Customers = /** @class */ (function () {
    //making the constructor
    function Customers(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customers.prototype, "firstName", {
        // getter 
        /*
            Syntax :- get <space> property()
        */
        get: function () {
            return this._firstName;
        },
        // setter 
        /*
            syntax :- set <space> property(..)
        */
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "lastname", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customers.prototype, "lastName", {
        set: function (value) {
            this.lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customers;
}());
// Let's create the instance of this class when we have the constructor 
var myCustomers = new Customers("ajay", "kumar");
console.log("first name - " + myCustomers.firstName);
console.log("last name - " + myCustomers.lastName);
