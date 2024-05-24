// array

//  const myArr = [0, 1 ,2 ,3, 4, 5];

// console.log(myArr[2]); // 2

// copy operations do shallow copies i.e whatever is changed later gets changed in the original array.

// const anotherArr = [ "hero", "vilain"];

// const anotherArr2 = new Array (1, 2, 3, 4);

// console.log(anotherArr2[1]);

// array methods

// anotherArr2.push(5); // pushes element to the array
// anotherArr2.pop(); // pops last value in array
// anotherArr2.unshift(9); // inserts an element in beginning of array
// anotherArr2.shift(); // removes first element from the array

// console.log(anotherArr2);

// console.log(anotherArr2.includes(2)); // array containes that element or not?
// console.log(anotherArr2.indexOf(2)); // index of particular element
// console.log(anotherArr2.indexOf(77));  // index of an element that doesnt exist in the array // -1

// const newArr = anotherArr2.join(); // binds array & converts values to string
// console.log(anotherArr2);
// console.log(newArr);

// slice, splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3); // last number is not included & original array is not changed
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3); // last number is included & original array is changed i.e elements are stripped of the original array
// console.log(myn2);
// console.log("C", myArr);


// const heros = ["hero1", "hero2", "hero3"]; 
// const villains = ["villain1", "villain2", "villain3"];

// heros.push(villains); // pushes whole second array as an element in the first array

// console.log(heros);

// anotherArr = heros.concat(villains); // merges the arrays properly
// console.log(anotherArr);

// anotherArr = [...heros, ...villains]; // same as concat but advanced
// console.log(anotherArr);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// // const another_real_array = another_array.flat(); // converts all sub arrays to single array, depths can be defined as well
// const another_real_array = another_array.flat(Infinity);
// console.log(another_real_array);

// console.log(Array.isArray("Bimo")); // checks whether array or not
// console.log(Array.from("Bimo")); // converts to array; creates array from..


// console.log(Array.from({name: "bimo"})); 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // creates array of variables ..