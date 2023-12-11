var found = true;
var grade = 88.6;
var firstName = "Ajay";
var lastName = 'Kumar';
// let's try to break the code
/*
found = 0;
grade ="A";
firstName = false;
*/
console.log(found);
console.log("Your grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// use template string
console.log("Hi ".concat(firstName, " ").concat(lastName));
