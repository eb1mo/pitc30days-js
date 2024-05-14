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
