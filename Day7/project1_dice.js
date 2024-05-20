alert("Welcome to Lazy Dice!");
let user1 = prompt("Enter Player1:");
let user2 = prompt("Enter Player2:");
let user3 = prompt("Enter Player3:");
let user4 = prompt("Enter Player4:");
let stopOrNot;
  do {
    function rdnum() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    function rdplr() {
      const players = [user1, user2, user3, user4];
      let rdmplrIndex = Math.floor(Math.random() * players.length);
      return players[rdmplrIndex];
    }
  
    let numInDice = rdnum();
    let playerName = rdplr();
    console.log(numInDice);
    console.log(playerName);
  
    alert(`${playerName}, You can move your marker by ${numInDice} steps.`)
    stopOrNot = prompt("Want another turn? (1/0): ");
  } while (Number(stopOrNot) === 1);


  


// numInDice = rdnum();
// playerName = rdplr();
// // console.log(x);
// // console.log(y);

// }
// let user1 = prompt("Enter Player1:");
// let user2 = prompt("Enter Player2:");
// let user3 = prompt("Enter Player3:");
// let user4 = prompt("Enter Player4:");

// function rdnum () {
//     return Math.floor(Math.random()*6)+1;
// }

// function rdplr () {
//     const players = [user1, user2, user3, user4];
//     rdmplrIndex = Math.floor(Math.random()*players.length);
//     rdmplrname = players[rdmplrIndex];
//     return rdmplrname;
// }

// numInDice = rdnum();
// playerName = rdplr();
// // console.log(x);
// console.log(y);

// const players = [user1, user2, user3, user4];

// const randomPlayerIndex = Math.floor(Math.random() * players.length);
// const randomPlayer = players[randomPlayerIndex];

// console.log(players.length);
// console.log(randomPlayerIndex);
// console.log(randomPlayer);

/* ++++++ rough works +++++*/

// let min = 1;
// let max = 6;

// rdnum = Math.floor(Math.random() * (max - min + 1) + min);

// console.log(rdnum);

// in single line

// console.log(Math.floor(Math.random()*6)+1);

// // Importing the readline module
// const readline = require('readline');

// // Creating an interface to read input from the terminal
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Asking the user for input
// rl.question('Please enter your name: ', (name) => {
//   // Processing the user input
//   console.log(`Hello, ${name}!`);

//   // Closing the interface
//   rl.close();
// });
