'use strict';

//Generate a random number between 1-20 and truncate anything after decimal
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

//Game Reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Check Button submission
document.querySelector('.check').addEventListener('click', function () {
  //take value guessed and convert to number
  const guess = Number(document.querySelector('.guess').value);

  //Add validator for invalid numbers, guesses too high, and guesses too low
  if (!guess || guess <= 0 || guess > 20) {
    document.querySelector('.message').textContent =
      "Oops! You didn't enter a valid number. Try again!";
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Hooray! You guessed the secret number!';
    document.querySelector('.number').textContent = secretNumber;
    //Change the background color on win
    document.querySelector('body').style.backgroundColor = '#60b347';
    //Change the width of the score block on win
    document.querySelector('.number').style.width = '30rem';
    // Set High Score to current score if score is greater than High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      //subtract 1 from score for every wrong guess
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Too bad, you lost the game. Try again!';
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      //subtract 1 from score for every wrong guess
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = score;
      ('Too bad, you lost the game. Try again!');
      document.querySelector('.score').textContent = score;
    }
  }
});
