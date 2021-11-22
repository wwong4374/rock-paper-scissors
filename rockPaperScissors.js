/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
// const playerOptions = ['rock', 'paper', 'scissors'];
const computerOptions = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
const pointsToWin = 5;

// HELPER FUNCTIONS
const handlePlayerWins = () => {
  const message = document.querySelector('span.message');
  message.textContent = `Player has won the game by winning ${pointsToWin} points!`;
};

const handleComputerWins = () => {
  const message = document.querySelector('span.message');
  message.textContent = `Computer has won the game by winning ${pointsToWin} points!`;
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  const message = document.querySelector('span.message');
  message.textContent = '';
};

const computerPlay = () => {
  // Generate random integer between minimum and maximum:
  // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  const maximum = 2;
  const minimum = 0;
  const index = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return computerOptions[index];
};

const updateScoreBoard = () => {
  const playerScoreDisplay = document.querySelector('span.playerScore');
  const computerScoreDisplay = document.querySelector('span.computerScore');
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
};

const checkGameScore = () => {
  if (playerScore === pointsToWin) {
    handlePlayerWins();
    // resetGame();
  }
  if (computerScore === pointsToWin) {
    handleComputerWins();
    // resetGame();
  }
};

// GAMEPLAY FUNCTIONS
const playRound = (playerSelection, computerSelection = computerPlay()) => {
  let message = '';
  if (playerSelection === computerSelection) {
    message = `Tie! Both played ${playerSelection}.`;
  }
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Scissors') {
      playerScore++;
      message = 'Player won! Rock beats Scissors.';
    } else {
      computerScore++;
      message = 'Player lost! Paper beats Rock.';
    }
  }
  if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      playerScore++;
      message = 'Player won! Paper beats Rock.';
    } else {
      computerScore++;
      message = 'Player lost! Scissors beats Paper.';
    }
  }
  if (playerSelection === 'Scissors') {
    if (computerSelection === 'Paper') {
      playerScore++;
      message = 'Player won! Scissors beats Paper.';
    } else {
      computerScore++;
      message = 'Player lost! Rock beats Scissors.';
    }
  }
  updateScoreBoard();
  return message;
};

// Handle button clicks
let playerSelection = '';
const buttons = document.querySelectorAll('button.rpsButton');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = e.target.textContent;
    const message = document.querySelector('span.message');
    message.textContent = playRound(playerSelection, computerPlay());
    checkGameScore();
  });
});

// const game = () => {
  // let playerSelection = '';
  // Play 5 rounds of rock paper scissors
  // for (let i = 0; i < 5; i++) {
  //   const playerSelection = prompt('Please select rock, paper, or scissors.');
  //   alert(playRound(playerSelection, computerPlay()));
  // }
  // if (playerScore === computerScore) {
  //   return 'The game ended in a tie!';
  // }
  // if (playerScore > computerScore) {
  //   return 'You won the game!';
  // }
  // return 'You lost the game!';
// };

// game();
