'use strict';

//Generate a random number between 1-20 and truncate anything after decimal
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Game Reset Function
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //console.log(secretNumber); for testing purposes only
  numberValue('?');
  displayMessage('Start guessing...');
  scoreValue(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Display Message Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Score Function
const scoreValue = function (score) {
  document.querySelector('.score').textContent = score;
};

//Number Function
const numberValue = function (value) {
  document.querySelector('.number').textContent = value;
};

//Check Button submission
document.querySelector('.check').addEventListener('click', function () {
  //take value guessed and convert to number
  const guess = Number(document.querySelector('.guess').value);

  //Add validator for invalid numbers, guesses too high, and guesses too low
  if (!guess || guess <= 0 || guess > 20) {
    displayMessage("Oops! You didn't enter a valid number. Try again!");
  } else if (guess === secretNumber) {
    displayMessage('Hooray! You guessed the secret number!');
    numberValue(secretNumber);
    //Change the background color on win
    document.querySelector('body').style.backgroundColor = '#60b347';
    //Change the width of the score block on win
    document.querySelector('.number').style.width = '30rem';
    // Set High Score to current score if score is greater than High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      //subtract 1 from score for every wrong guess
      score--;
      scoreValue(score);
    } else {
      displayMessage('Too bad, you lost the game. Try again!');
      scoreValue(score);
    }
  }
});
