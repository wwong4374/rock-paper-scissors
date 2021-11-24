/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
// const playerOptions = ['rock', 'paper', 'scissors'];
const computerOptions = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
const pointsToWin = 5;
const emojis = {
  Rock: '🪨',
  Paper: '📄',
  Scissors: '✂️',
  leftFist: '🤜',
  rightFist: '🤛'
};

// HELPER FUNCTIONS
const assignEmojis = (playerSelection, computerSelection) => {
  const playerEmoji = document.querySelector('div.playerSelection');
  const computerEmoji = document.querySelector('div.computerSelection');
  playerEmoji.textContent = emojis[playerSelection];
  computerEmoji.textContent = emojis[computerSelection];
};

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
  message.textContent = 'First to 5 wins... ';
};

const handleGameEnd = () => {
  const buttons = document.querySelectorAll('button.rpsButton');
  buttons.forEach((button) => {
    button.removeEventListener('click', handleRPSButtonClick);
  });
};

const handlePlayerWins = () => {
  const message = document.querySelector('span.message');
  message.textContent = 'Player won the game!';
  handleGameEnd();
};

const handleComputerWins = () => {
  const message = document.querySelector('span.message');
  message.textContent = 'Computer won the game!';
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
  assignEmojis(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
    message = 'Tie!';
  }

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Scissors') {
      playerScore++;
      message = 'Player won this round!';
    } else if (computerSelection === 'Paper') {
      computerScore++;
      message = 'Computer won this round!';
    }
  }
  if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      playerScore++;
      message = 'Player won this round!';
    } else if (computerSelection === 'Scissors') {
      computerScore++;
      message = 'Computer won this round!';
    }
  }
  if (playerSelection === 'Scissors') {
    if (computerSelection === 'Paper') {
      playerScore++;
      message = 'Player won this round!';
    } else if (computerSelection === 'Rock') {
      computerScore++;
      message = 'Computer won this round!';
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
  assignEmojis('leftFist', 'rightFist');
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
