let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#submit");
// const newG = document.querySelector("#newG");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParams");

const p = document.createElement("p");

p.innerHTML = `<button id = "newGame"> Start New Game </button>`;
startOver.appendChild(p);


// newG.addEventListener('click', ()=>{
//     newGame();
// });

startOver.style.display = 'none';

userInput.addEventListener("input", () => {
  if (userInput.value != "") {
    startOver.style.display = "block";
  } else {
    startOver.style.display = "none";
  }
});

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage(`Plz enter a valid number.`);
  } else if (guess < 1) {
    displayMessage(`Number should be greater than 1`);
  } else if (guess > 100) {
    displayMessage(`Number should be smaller than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The target number is more than this.`);
  } else if (guess > randomNumber) {
    displayMessage(`The target number is less than this.`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  //   p.classList.add("button");
  //   p.innerHTML = `<button id = "newGame"> Start New Game </button>`;
  //   startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", (event) => {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = "";
      remaining.innerHTML = `${10 - numGuess} `;
      userInput.removeAttribute("disabled");
      submit.removeAttribute("disabled");
      lowOrHi.innerHTML = "";
      startOver.style.display = "none";
      playGame = true;
    });
}
