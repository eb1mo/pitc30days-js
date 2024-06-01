// Control Flow

// if

/*
Syntax:
if (condition) { 
}
// The condition must be true for the codes inside if to be executed.

// Relational Operators: <, >, <= ,>= ,== ,!= , ===
// === compares datatype strictly
*/

// const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//     console.log("User is Logged In");
// }

// if (2 == "2") {
//     console.log("Inside If");
// }

// if (2 != "2") {
//     console.log("Inside If");
// }

// const temp = 45;
// if (temp < 50) {
//     console.log("Inside If");
// }
// console.log("Outside If");

// const temp = 45;
// if (temp < 50) {
//     console.log("Temp Below 50");
// }
// else {
//     console.log("Temp Above 50");
// }

/* Scope problem*/

// const score = 200;

// if (score > 100) {
//     const power = "Fly";
//     console.log(`User ability: ${power}`);
// }

//console.log(`User ability: ${power}`); // error because power is inside if scope only

/* shorthand notation */

// const balance = 1001;
// if (balance > 1000) console.log("test");
// if (balance > 1000) console.log("test"),
// console.log("test2");

// if (balance < 500) {
// console.log("less than 500");
// } else if (balance < 750) {
// console.log("less than 750");
// } else {
//     console.log("More than");
// }

/*
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In");
}
else {
    console.log("Plz Login");
}

if (userLoggedIn && debitCard) {
    console.log("User Logged in & Has Debit Card");
}
else {
    console.log("User might not have logged in or has no debit card.")
}
*/

// Ternary Operator

// Syntax: condition ? true : false

const price = 59;

price <=60 ? console.log("Buy") : console.log("Dont Buy");