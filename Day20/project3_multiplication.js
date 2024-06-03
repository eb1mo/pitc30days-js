const num1 = prompt("Enter which number you want multiplication table of? ");
const num2 = prompt("Enter upto which number you want the multiplication table? ");
console.log(`Multiplication table of ${num1}`);

for (let i = 1; i <= num2; i++) {
    console.log(`${num1} x ${i} = ${num1 * i}`);
}


/* Practice */
/*
const num1 = 2;
const num2 = 10;

console.log(`Multiplication table of ${num1}`);
/* for loop

for (let i = 1; i <= num2; i++) {
    console.log(`${num1} x ${i} = ${num1 * i}`);
} */

/* while loop
let i = 1;
while (i<=num2) {
    console.log(`${num1} x ${i} = ${num1 * i}`);
    i++;
}
*/
/*
let i = 1;
do{
    console.log(`${num1} x ${i} = ${num1 * i}`);
    i++;
} while (i<=num2);*/