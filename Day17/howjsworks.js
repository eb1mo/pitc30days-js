/*
Call Stack - how function goes in memory, gets procesesed & comes out of it.

JS Execution Context - how js runs your code

Global EC is made when code is given to js; refered by this.

window object is default value of this. in browser.

JS is single threaded.

Types of EC
- Global EC
- Function EC
- Eval EC

How is executed?

- Converted into 2 phases
-> Memory Creation Phase: memory is allocated to variables
-> Execution Phase: operations gets executed

1: Allocated to Global Phase (this)
2. Memory Phase
3. Execution Phase


*/

let val1 = 10;
let val2 = 5; 

function addNum(num1, num2) { 
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10,2);

console.log(result1);
console.log(result2);

/*

* First Cycle
val1-> undefined
val2-> undefined
addNum-> defination
result1-> undefined
result2-> undefined

* Second Cycle - Execution Phase
val1 -> 10
val2 -> 5
addNum -> New variable env & new executional context & Exe thread
result1-> 15
result2->

. memoryphase
val1-> undefined
val2-> undefined
total -> undefined

. exe phase
num1-> 10
num2-> 5
total-> 15
return total to global EC

another memory & exe phase for another fxn


*/

function one() {
    console.log("one");
}
function two() {
    console.log("Two");
}
function three() {
    console.log("Three");
}
one();
two();
three();