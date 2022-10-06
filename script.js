'use strict';

// Generating a random value and storing it in a variable

let secretNumber = Math.floor(Math.random() * 10 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  document.querySelector('.score').textContent = score;

  // If there is no value in the input

  if (!guess) {
    document.querySelector('.message').textContent = 'Please insert a number';
  } else if (score < 1) {
    document.querySelector('.message').textContent = 'You lost';
    document.querySelector('body').style.backgroundColor = '#FF0000';
  }
  // If the guess is right
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You Won!!';
    document.querySelector('body').style.backgroundColor = '#008000';
    document.querySelector('.qmark').textContent = secretNumber;
    document.querySelector('.highScore').textContent = score;
  }

  // If the guess is higher than the secret number
  else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high';
    score--;
  }

  // If the guess is lower than the secret number
  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
  }

  // Setting highScore
  else if (score > highScore) {
    highScore = score;
    document.querySelector('.highScore').textContent = highScore;
  }
});

// Reset the game

document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 10 + 1);
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.qmark').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#043030';
});
