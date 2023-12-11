let found : boolean = true;
let grade : number = 88.6;
let firstName : string = "Ajay";
let lastName : string = 'Kumar';

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
console.log(`Hi ${firstName} ${lastName}`);
