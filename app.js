const rockButton = document.querySelector("#rockbtn");
const paperButton = document.querySelector("#paperbtn");
const scissorsButton = document.querySelector("#scissorsbtn");
const displayPlayerScore = document.querySelector("#pScore");
const displayComputerScore = document.querySelector("#cScore");
const outcome = document.querySelector('.outcome');
let roundResult = ''
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

    console.log(
      "TIE GAME!\n" +
        "the computer picked: " +
        computerSelection +
        "\n" +
        "the player picked: " +
        playerSelection +
        "\n" +
        "the computer's score: " +
        computerScore +
        "\n" +
        "the player's score: " +
        playerScore
    );
  }

  if (
    // COMPUTER WINS
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    outcome.textContent = `Computer wins! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    displayComputerScore.textContent = computerScore;

    console.log(
      "You LOSE!\n" +
        "the computer picked: " +
        computerSelection +
        "\n" +
        "the player picked: " +
        playerSelection +
        "\n" +
        "the computer's score: " +
        computerScore +
        "\n" +
        "the player's score: " +
        playerScore
    );
  }

  if (
    // PLAYER WINS
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "rock" && playerSelection === "paper")
  ) {
    playerScore++;
    outcome.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    displayPlayerScore.textContent = playerScore;
    console.log(
      "You WIN!\n" +
        "the computer picked: " +
        computerSelection +
        "\n" +
        "the player picked: " +
        playerSelection +
        "\n" +
        "the computer's score: " +
        computerScore +
        "\n" +
        "the player's score: " +
        playerScore
    );
  }
}

rockButton.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
  console.log("rock");
});
paperButton.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
  console.log("paper");
});
scissorsButton.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
  console.log("scissors");
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// function playGame() {
//   const computerSelection = getComputerChoice();
//   playRound(playerSelection, computerSelection);

//   console.log(
//     "TOTAL SCORES: \n" +
//       "Computer: " +
//       computerScore +
//       "\n" +
//       "Player: " +
//       playerScore
//   );
// }

// playGame();
