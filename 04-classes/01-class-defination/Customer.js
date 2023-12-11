var Customer = /** @class */ (function () {
    //making the constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//lets create an instance of this class when we have declared the constructor
// let myCustomer = new Customer();
// myCustomer.firstName = "Ajay";
// myCustomer.lastName = "kumar";
// console.log("first name - " + myCustomer.firstName );
// console.log("last name - " + myCustomer.lastName);
// Let's create the instance of this class when we have the constructor 
var myCustomer = new Customer("ajay", "kumar");
console.log("first name - " + myCustomer.firstName);
console.log("last name - " + myCustomer.lastName);
