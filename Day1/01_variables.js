const accountId = 123;
let accountEmail = "bimochan@bimochan.com";
var accountPassword = "12345";
accountCity = "KTM";

let accountState;

/* Prefer not to use var
because of issue in block scope & functional scope */

// accountId = 2; // value of const can't be changed during execution

accountEmail = "test@test.test";
accountPassword = "2121";
accountCity = "Bharatpur";

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*** extra  ****/

/* hoisting - js moves a function to top of file automatically while running the program.
Due to this, we can declare & use a function anywherer in the code. */

// function addFxn(a, b) {
//   return a + b;
// }

console.log(addFxn(100, 10));

function addFxn(a, b) {
    return a + b;
  }