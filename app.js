const rockButton = document.querySelector("#rockbtn");
const paperButton = document.querySelector("#paperbtn");
const scissorsButton = document.querySelector("#scissorsbtn");
const displayPlayerScore = document.querySelector("#pScore");
const displayComputerScore = document.querySelector("#cScore");
const outcome = document.querySelector(".outcome");
const resetGame = document.querySelector("#reset");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const random =
    rockPaperScissors[~~(Math.random() * rockPaperScissors.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    // TIE GAME
    outcome.textContent = "Tie game!";
  }

  if (
    // COMPUTER WINS
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    outcome.textContent = 
    `Computer wins! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    displayComputerScore.textContent = computerScore;
  }

  if (
    // PLAYER WINS
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "rock" && playerSelection === "paper")
  ) {
    playerScore++;
    outcome.textContent = 
    `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    displayPlayerScore.textContent = playerScore;
  }
}

rockButton.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});
resetGame.addEventListener("click", function () {
  resetScore();
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function resetScore() {
  computerScore = 0;
  playerScore = 0; 
  outcome.textContent = "Enjoy the game!";
  displayPlayerScore.textContent = playerScore;
  displayComputerScore.textContent = computerScore;
}