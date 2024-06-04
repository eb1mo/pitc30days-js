/* for of loop; used in arrays 

Syntax:
for (const iterator of object) {
}
*/

// ["", "",""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello";
// for (const i of greetings) {
//     console.log(i);
// }

/* Maps */

// const map = new Map();
// map.set('NP', "Nepal");
// map.set('IN', "India");
// map.set('FR', "France");

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(key, value);
// }

// const myObj = {
//     'con1' : "India",
//     'con2' : "Nepal"
// }

// for (const i of myObj) {
//     console.log(i);
// }
// this doesn't work in objects

// const myObj = {
//   con1: "India",
//   con2: "Nepal",
// };

// for (const key in object) {
// }

// for (const key in myObj) {
//   console.log(key); // get keys
// }

// for (const key in myObj) {
//   console.log(myObj[key]); // get values of keys
// }

// const myArr = [10,20,30,40,50,60,70];
// for (const key in myArr) {
//     console.log(key); // these gets keys of the array; the major diff betn forof & forin is that, for of gets values while used 
//     // in arrays whereas forin gets keys while used in array.
// }

// for (const key in myArr) {
//     console.log(myArr[key]);
// }

// /* forin in map */
// const map = new Map(); 
// map.set('NP', "Nepal");
// map.set('IN', "India");
// map.set('FR', "France");

// for (const key in map){ // map is not iteratable like this
//     console.log(key);
// }

/* foreach loop */

const myArr = [10, 20, 30, 40, 50];

// myArr.forEach(function (item) {}) // callback fxn is used; these fxn has no name

// myArr.forEach(function (items) {
// console.log(items);
// })

// myArr.forEach( (items) => {
// console.log(items);
// })

/* fxn inside for each */
// function printMe(item) {
//     console.log(item); // simple fxn that prints items passed to it.
// }

// myArr.forEach(printMe);

// myArr.forEach( (item, index, array ) => {
//     console.log(item, index, array);
// } )


/* loop inside array with objects */
const myCoding = [
    {
        langName: "JavaScript",
        langFile: "js"
    },
    {
        langName: "C Prog",
        langFile: "c"
    },
    {
        langName: "C ++",
        langFile: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
    console.log(item.langFile);
} )