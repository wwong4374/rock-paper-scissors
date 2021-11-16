/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
const playerOptions = ['rock', 'paper', 'scissors'];
const computerOptions = ['Rock', 'Paper', 'Scissors'];

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

  let playerSelectionFormatted = playerSelection.toLowerCase();
  playerSelectionFormatted = playerSelection[0].toUpperCase()
    + playerSelectionFormatted.slice(1, playerSelectionFormatted.length);

  if (playerSelectionFormatted === computerSelection) {
    return 'Tie! Both played ' + playerSelectionFormatted;
  }
  if (playerSelectionFormatted === 'Rock') {
    if (computerSelection === 'Scissors') {
      return 'You win! Rock beats Scissors';
    }
    return 'You lose! Paper beats Rock';
  }
  if (playerSelectionFormatted === 'Paper') {
    if (computerSelection === 'Rock') {
      return 'You win! Paper beats Rock';
    }
    return 'You lose! Scissors beats Paper';
  }
  if (playerSelectionFormatted === 'Scissors') {
    if (computerSelection === 'Paper') {
      return 'You win! Scissors beats Paper';
    }
    return 'You lose! Rock beats Scissors';
  }
  return 'Invalid round';
};

let playerSelection = 'SCISSORS';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
