// const user = {
//   username: "Bimo",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username}, Welcome to website.`); // this refers to current context
//     console.log(this);
//   },
// };

// user.welcomeMessage();
// user.username="Ram";
// user.welcomeMessage();
// console.log(this); // this refers to empty object in node env but shows window object in browser console
// because window is the global object in browser

// function one () {
//     let username = "Bimo";
//     console.log(this.username); // undefined because this cant be used in function
// }

// one();

// const two = function () {
//     let username="Bimo";
//     console.log(this.username);
// }

// two();


/* arrow fxn */

() => {} // syntax of arrow fxn

// const two = () => {
//     let username="Bimo";
//     console.log(this.username);
// }

// two();

const sum = (num1, num2) => {
    return num1 + num2;
}

// const sum = (num1, num2) => num1 + num2; // implicite return

// const sum = (num1, num2) => (num1 + num2); // implicite return; return not required when using implicite function or parenthesis

// const sum = (num1, num2) => {username: "Bimo"}; // throws error as () is required to return

// const sum = (num1, num2) => ({username: "Bimo"});

console.log(sum(1, 2));

// const Arr = [1,2,3,4];
// Arr.forEach(()=>{})