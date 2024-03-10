//Take random number
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
//Taking inputs in variable
// let randomNo = document.querySelector(".randomNo");
let userInput = document.getElementById("inp");
let btn = document.getElementById("btn");
let previousArray = document.querySelector(".pre");
let remaingGuess = document.querySelector(".rem");
let starNo = document.querySelector(".newGame");
let result = document.querySelector(".result");
let p = document.createElement("p");
let playGame = true;
let preArray = [];
let guessNo = 1;
let message;
let randomArray = [];

if (playGame) {
  btn.addEventListener("click", function (e) {
    let guess = parseInt(userInput.value);
    userInput.value = "";
    e.preventDefault();
    if (guessNo === 10) {
      starNo.innerHTML = `<h2>Game Over. Random number was ${randomNumber}</h2>`;

      endGame();
    } else if (isNaN(guess)) {
      alert("Please enter the valid Number");
    } else {
      validateState(guess);
      userInput.value = "";
      checkGuess(guess);
    }
  });
}

function validateState(guess) {
  if (guess < 1) {
    alert(`Please enter the number greater than 1`);
  } else if (guess > 100) {
    alert(`Please enter the number smaller than 100`);
  } else {
    checkGuess(guess);
    preArray.push(guess);
    previousArray.innerHTML = `[${preArray}]`;
    remaingGuess.innerHTML = 10 - guessNo;
    guessNo++;
    randomArray.push(randomNumber);
    // randomNo.innerHTML = randomArray;
  }
}
function checkGuess(guess) {
  if (guess == randomNumber) {
    message = `Congratulation,You are winner.Your guess ${guess} is matched with ${randomNumber} Random Number`;
  } else if (guess < randomNumber) {
    message = "Your guess is Too small";
  } else if (guess > randomNumber) {
    message = "Your guess is Too greater";
  }
  showMessage(message);
}
function showMessage(message) {
  starNo.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="bttn">Start new Game</button>`;
  result.appendChild(p);

  playGame = false;
  newGame();
}
function newGame() {
  let bttn = document.getElementById("bttn");
  bttn.addEventListener("click", function () {
    userInput.removeAttribute("disabled");
    result.removeChild(p);
    starNo.innerHTML = "Message";
    randomNo.innerHTML = "";
    previousArray.innerHTML = "";
    playGame = true;
    preArray = [];
    guessNo = 1;
    message;
    randomArray = [];
  });
}
