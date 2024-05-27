// function myName () {
//     return "bimochan";
// }
// console.log(myName());

// function addTwoNumbers (number1, number2) {
//     return number1 + number2;
// }

// console.log(addTwoNumbers(1,2));

// function addTwoNumbers (number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(1,2);
// addTwoNumbers(1,"2");
// addTwoNumbers(1,"a");
// addTwoNumbers(1,null);
// addTwoNumbers("1",2);

// const result = addTwoNumbers(1,2);
// console.log(typeof(result)); // undefined because function has console, it must have something to return so that the value can be stored in return variable
// console.log(`result: ${result}`);

// function addTwoNumbers (num1, num2) {
//     return num1 + num2;
// }

// const result = addTwoNumbers(1,2);
// console.log(result);
// console.log(typeof(result));

// no code will be executed after return of function

// function loginUserMessage (username) {
//     if (!username) {
//         console.log("invalid input");
//         return;  // stops code running after this
//     }
//     return `${username} just logged in.`
// }

// // console.log(loginUserMessage("Bimochan"));
// console.log(loginUserMessage()); //undefined because no argument is given

// function loginUserMessage (username="Ram") {
//         if (!username) {
//             console.log("invalid input");
//             return;  // stops code running after this
//         }
//         return `${username} just logged in.`
//     }
//     console.log(loginUserMessage()); // Ram just logged in. ; no argument is given so default argument i.e Ram is used
//     console.log(loginUserMessage("Bimo")); // Bimo just logged in. ; argument is given so argument is used

/* rest operator */

// function calculatePrice (...num1) { // converts all the arguments into an array; used in case where no. of arguments is not pre specified i.e in the case of add to cart in ecomm
//     return num1;
// }

// console.log(calculatePrice(2, 3, 4));

// function calculatePrice(val1, val2, ...num1) {
//   return num1;
// }

// console.log(calculatePrice(1, 2, 3, 4, 5, 6)); // val1 takes 1, val2 takes 2 & rest is taken by rest operator

/* objects in function */

// const user = {
//   username: "bimo",
//   age: 21,
// };

// function handleObj(anyObj) {
//   console.log(`Username is ${anyObj.username}, Age is ${anyObj.age}.`);
// }

// // handleObj(user);

// handleObj({
//     username: "Ram",
//     age: 999
// }) // object can be passed like this as well

// const myArray = [1, 2, 3, 4, 5];

function returnSecond (getArray) {
return getArray[1];
}

// console.log(returnSecond(myArray));
console.log(returnSecond([1, 2, 3, 4, 5])); // array can be passed like this as well