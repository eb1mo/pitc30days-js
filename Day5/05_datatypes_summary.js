// Primitive Datatypes - 7 types - call by value
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Non Primitive/ Reference Datatypes - call by reference
// Arrays, Objects, Functions

// const score=100
// const scorevalue=100.9

// const isLoggedIn=false
// const Temp=null
// let userEmail;

// const id = Symbol('123');
// const anotherId = Symbol('123');

// console.log(id);
// console.log(anotherId);
// console.log(id==anotherId);

// const number = 904258975097629076384838478278787584783759345793459347593759375937459;
// const bigNumber = 904258975097629076384838478278787584783759345793459347593759375937459n;
// console.log(number);
// console.log(bigNumber);

// Non Primitive

const heros = ["ironman", "spiderman", "captain america"]; //arrays

//objects
let myObj = {
    name:"bimo",
    age:21
}

//functions

const myFxn = function(){
    console.log("Hello!");
}

// datatypes of non primitive datatypes is object & that of function is function object

function myPro(a, b) {
  return a + b;
}

let x = myPro(2, 3);
console.log(x);