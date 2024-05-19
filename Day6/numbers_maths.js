// const score = 100;
// console.log(score);

// const balance = new Number(100.2873823401);
// console.log(balance);


// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const anotherNumber = 3.14159

// console.log(anotherNumber.toPrecision(2));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());//american currency
// console.log(hundreds.toLocaleString('en-IN'));// indian currency

// +++++++ maths +++++++
// console.log(Math.PI);
// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.max(1,4,3));
// console.log(Math.random());


// console.log((Math.random()*10)+1);


// print random number between certain range
const min = 1
const max = 10

// number = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(number)

rdm = Math.random(); // generates random number between 0 & 1
rdmrng = rdm * (max-min + 1) // generates number between min & max, +1 is added to avoid 0; remove +1 if 0 required
rdmflor = Math.floor(rdmrng) // floors the generated decimal 
rdmmin = rdmflor + min // defines minimum value; this makes sure the generated value is atleast minimim value

console.log(rdmmin);