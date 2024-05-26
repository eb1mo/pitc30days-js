// singleton is made when declaring objects through constructors

// object literals

// const mySym = Symbol("key1");

// const JsUser = {
//   name: "bimo",
//   "full name": "bimo poudel", // these types of values cant be accessed by using object .
//   // mySym: "mykey1",
//   [mySym]: "mykey1",
//   age: 21,
//   location: "ktm",
//   email: "bimo@bimo",
//   isLoggedIn: true,
//   lastLoginDays: ["Monday", "Saturday"],
// };

// console.log(JsUser.email); //method 1

// console.log(JsUser["email"]); //method 2

// console.log(JsUser["full name"]);

// console.log(JsUser.mySym); // output is printed but datatype of result is not symbol

// console.log(JsUser[mySym]);
// console.log(typeof(JsUser[mySym]));

// JsUser.email = "bimo@test" // change values
// Object.freeze(JsUser); // freezes the object & cant be changed
// JsUser.email="test@test";
// console.log(JsUser.email);

// JsUser.greeting = function() {
//     console.log("Hello");
// }
// console.log(JsUser.greeting()); // functions in objects
// // if () is not used in function at console.log or other places then function will be identified but output will not come

// JsUser.greeting2 = function() {
//     console.log(`Hello ${this.name}`); // this is used to access properties within an object
// }
// console.log(JsUser.greeting2());

// JsUser.greeting3 = function() {
//     return(`Hello ${this.name}`);
// }
// console.log(JsUser.greeting3());  // undefined was coming as output because the function did't have any return value.
// // in this console log there is no undefined because there is return value in function.

/* objects part 2 */

// const pcUser = new Object();

// const pcUser = {}
// pcUser.name = "bimo"
// pcUser.age = 21

// // console.log(pcUser);

// const pcUser1 = { // nesting objects
//     email: "test@test",
//     fullname: {
//         userfullname: {
//             firstname: "bimo",
//             lastname: "poudel"
//         }
//     }
// }

// console.log(pcUser1.fullname);
// console.log(pcUser1.fullname.userfullname.firstname); //accessing objects
// console.log(pcUser1.fullname.userfullname?.firstname); // accessing objects using condition ?

// const obj1 = {
//     1: "a",
//     2: "b"
// }
// const obj2 = {
//     3: "a",
//     4: "b"
// }
// const obj4 = {
//     5: "a",
//     6: "b"
// }

// // const obj3 = {obj1, obj2};
// // console.log(obj3);

// // const obj3 = Object.assign(obj1, obj2); //merging objects
// // const obj3 = Object.assign({}, obj1, obj2, obj4); //merging objects prefered method

// const obj3 = {...obj1, ...obj2, ...obj4} // simple method
// console.log(obj3);

// const users = [
//   // array of objects
//   {
//     id: 1,
//     email: "test@test",
//   },
//   {
//     id: 1,
//     email: "test@test",
//   },
//   {
//     id: 1,
//     email: "test@test",
//   },
//   {
//     id: 1,
//     email: "test@test",
//   },
// ];

// console.log(users[0].email); // accessing properties in array of objects

const pcUser = {}
pcUser.name = "bimo"
pcUser.age = 21

console.log(pcUser);
console.log(Object.keys(pcUser)); // taking out property keys - useful for working with db
console.log(Object.values(pcUser)); // values are taken
console.log(Object.entries(pcUser)); // all entries are taken
console.log(pcUser.hasOwnProperty('name')); // has that property

// define an object in console of browser & test the methods