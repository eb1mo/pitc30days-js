// const userEmail = " ";

// if (userEmail) {
//     console.log("User Email Received");
// } else {
//     console.log("No User Email Received");
// }

// Falsy values: false, 0, -0, BigInt, "", null, undefined, NaN

// Truthy values: [], "0", "false", " ", {}, function(){} 

/* 
Way of checking empty array

const Users = [];
if (Users.length === 0) {
    console.log("Array is empty.")
}
else {
    console.log("Not empty");
}
*/
/*
Way of checking empty obj

const myObj = {}
if (Object.keys(myObj).length===0) {
    console.log("Empty Obj");
}
else {
    console.log("Not empty");
} 
*/

// Nullish Coalescing Operator (??): null undefined

let val;

// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 10;
val = undefined ?? 10 ?? 20;
// assigns value to variable other than null/undefined; used in cases where null/undefined value can break the program
console.log(val);