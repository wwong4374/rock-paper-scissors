/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
const playerOptions = ['rock', 'paper', 'scissors'];
const computerOptions = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
  // To generate a random integer between minimum and maximum:
  // https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  const maximum = 2;
  const minimum = 0;
  const index = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return computerOptions[index];
};

const playRound = (playerSelection, computerSelection = computerPlay()) => {
  if (typeof playerSelection !== 'string') {
    return 'Please select rock, paper, or scissors.';
  }
  if (!playerOptions.includes(playerSelection.toLowerCase())) {
    return 'Please select rock, paper, or scissors.';
  }

  // Format the playerSelection
  let playerSelectionFormatted = playerSelection.toLowerCase();
  playerSelectionFormatted = playerSelection[0].toUpperCase()
    + playerSelectionFormatted.slice(1, playerSelectionFormatted.length);

  if (playerSelectionFormatted === computerSelection) {
    return `Tie! Both played ${playerSelectionFormatted}`;
  }
  if (playerSelectionFormatted === 'Rock') {
    if (computerSelection === 'Scissors') {
      playerScore++;
      return 'You win! Rock beats Scissors';
    }
    computerScore++;
    return 'You lose! Paper beats Rock';
  }
  if (playerSelectionFormatted === 'Paper') {
    if (computerSelection === 'Rock') {
      playerScore++;
      return 'You win! Paper beats Rock';
    }
    computerScore++;
    return 'You lose! Scissors beats Paper';
  }
  if (playerSelectionFormatted === 'Scissors') {
    if (computerSelection === 'Paper') {
      playerScore++;
      return 'You win! Scissors beats Paper';
    }
    computerScore++;
    return 'You lose! Rock beats Scissors';
  }
  return 'Invalid round';
};

const game = () => {
  // Play 5 rounds of rock paper scissors
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Please select rock, paper, or scissors.');
    alert(playRound(playerSelection, computerPlay()));
  }
  if (playerScore === computerScore) {
    return 'The game ended in a tie!';
  }
  if (playerScore > computerScore) {
    return 'You won the game!';
  }
  return 'You lost the game!';
};

game();
