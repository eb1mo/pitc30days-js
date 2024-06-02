// for loop

// for (i = 0; i <= 10; i++){
//     console.log(i);
// }

// const array = [10,20,30,40];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element==10) {
//         console.log("First Number is printed");
//     }
//     console.log(element);
// }

// for (i=0;i<=10;i++){
//     console.log(`Inside i ${i}`);
//     for(j=0;j<=10;j++){
//         console.log(`Inside j ${j} for loop ${i}`);
//     }
// }

/*  Exercise- Print multiplication table from 2 to 12 

for (i = 2; i<=12; i++){
    console.log(`Multiplication Table of ${i}`);
    for (j = 1; j <=10; j++){
        let mul = i*j;
        console.log(`${i} x ${j} = ${mul}`);
    }
}
*/

// break & continue

for (i=1; i<=20; i++) {
    if (i==10) {
        console.log("halfway");
        break; // immediately breaks iteration
    }
    console.log(i);
}

for (i=1; i<=20; i++) {
    if (i==10) {
        console.log("halfway");
        continue; // doesn't immediately breaks iteration, allows one more
    }
    console.log(i);
}