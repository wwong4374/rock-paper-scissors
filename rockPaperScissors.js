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
const updateScoreBoard = () => {
  const playerScoreDisplay = document.querySelector('span.playerScore');
  const computerScoreDisplay = document.querySelector('span.computerScore');
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
};

const resetScoreBoard = () => {
  playerScore = 0;
  computerScore = 0;
  updateScoreBoard();
  const message = document.querySelector('span.message');
  message.textContent = 'Let\'s play!';
};

const handleGameEnd = () => {
  // resetScoreBoard();
  const buttons = document.querySelectorAll('button.rpsButton');
  buttons.forEach((button) => {
    button.removeEventListener('click', handleRPSButtonClick);
  });
};

const handlePlayerWins = () => {
  const message = document.querySelector('span.message');
  message.textContent = 'Player wins!';
  handleGameEnd();
};

const handleComputerWins = () => {
  const message = document.querySelector('span.message');
  message.textContent = 'Computer wins';
  handleGameEnd();
};

const checkGameScore = () => {
  if (playerScore === pointsToWin) {
    handlePlayerWins();
  }
  if (computerScore === pointsToWin) {
    handleComputerWins();
  }
};

const computerPlay = () => {
  // Generate random integer between minimum and maximum:
  // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  const maximum = 2;
  const minimum = 0;
  const index = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return computerOptions[index];
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
    } else if (computerSelection === 'Paper') {
      computerScore++;
      message = 'Player lost! Paper beats Rock.';
    }
  }
  if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      playerScore++;
      message = 'Player won! Paper beats Rock.';
    } else if (computerSelection === 'Scissors') {
      computerScore++;
      message = 'Player lost! Scissors beats Paper.';
    }
  }
  if (playerSelection === 'Scissors') {
    if (computerSelection === 'Paper') {
      playerScore++;
      message = 'Player won! Scissors beats Paper.';
    } else if (computerSelection === 'Rock') {
      computerScore++;
      message = 'Player lost! Rock beats Scissors.';
    }
  }
  updateScoreBoard();
  return message;
};

const handleRPSButtonClick = (e) => {
  const playerSelection = e.target.textContent;
  const message = document.querySelector('span.message');
  message.textContent = playRound(playerSelection, computerPlay());
  checkGameScore();
};

const startNewGame = () => {
  resetScoreBoard();
  // let playerSelection = '';
  const buttons = document.querySelectorAll('button.rpsButton');
  buttons.forEach((button) => {
    button.addEventListener('click', handleRPSButtonClick);
  });
};

const newGameButton = document.querySelector('button.newGameButton');
newGameButton.addEventListener('click', () => {
  startNewGame();
});

startNewGame();
