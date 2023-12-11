"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
// Let's create the instance of this class when we have the constructor 
let student = new Student_1.Student("ajay", "kumar");
console.log("first name - " + student.firstName);
console.log("last name - " + student.lastName);
