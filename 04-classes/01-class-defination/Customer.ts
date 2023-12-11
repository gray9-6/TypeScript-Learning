class Customer{
    firstName : string;
    lastName : string;

    //making the constructor
    constructor(theFirst : string, theLast : string){                // theFirst is property and string is the data type
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}


//lets create an instance of this class when we have declared the constructor
// let myCustomer = new Customer();

// myCustomer.firstName = "Ajay";
// myCustomer.lastName = "kumar";

// console.log("first name - " + myCustomer.firstName );
// console.log("last name - " + myCustomer.lastName);


// Let's create the instance of this class when we have the constructor 
let myCustomer = new Customer("ajay","kumar");
console.log("first name - " + myCustomer.firstName );
console.log("last name - " + myCustomer.lastName);

