// Odin Project RPS
//scissors beats paper
//paper beats rock
//rock beats scissors

const computerSelection = getComputerChoice();
const playerSelection = "rock";

function getComputerChoice() {
  let rpsList = ["rock", "paper", "scissors"];
  let random = rpsList[~~(Math.random() * rpsList.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie game!!");
  }

  if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    console.log("You lose");
  }

  if (
    (computerSelection == "scissors" && playerSelection == "rock") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "rock" && playerSelection == "paper")
  ) {
    console.log("You WIN!");
  }
}

console.log(
  "the computer picked: " +
    computerSelection +
    "\n" +
    "the player picked: " +
    playerSelection
);
console.log(playRound(playerSelection, computerSelection));
