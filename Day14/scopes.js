// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30; // let & const values dont come outside scope but value of var comes out of scope
//     d = 40; // same with this as well
// }

// console.log(a); // outputs error
// console.log(b); // outputs error
// console.log(c); // outputs 30
// console.log(d); // outputs 40


// let a = 300;

// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     d = 40;
//     console.log(`Inside if: ${a}`); // local/block scope outputs 10
// }

// console.log(`Outside if: ${a}`); // global scope outputs 300


/* part 2 */

// function one () {
//     const username = "bimo"

//     function two () {
//         const website = "google.com";
//         console.log(username);
   // }
    // console.log(website); // gives error
    // two();
// }
//one();

// child can access parent's variable but parent's cant access child's


// if (true) {
//     const username = "bimo"
//     if (username==="bimo"){
//         const website = " google.com";
//         console.log(username + website);
//     }
    // console.log(website); // error because outside scope
// }
// console.log(username); // error because outside scope


console.log(addone(5));

function addone (num) {
return num + 1;
}


const addTwo = function (num) { // this type of function defination cannot be hoisted
    return num + 2;
}

console.log(addTwo(5));