// Odin Project RPS
//scissors beats paper
//paper beats rock
//rock beats scissors

function getComputerChoice() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const random =
    rockPaperScissors[~~(Math.random() * rockPaperScissors.length)];
  return random;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie game!!");
    console.log(
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
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    console.log("You lose! Big fat loser!");
    console.log(
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
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "rock" && playerSelection === "paper")
  ) {
    playerScore++;
    console.log("You WIN!");
    console.log(
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

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}

// console.log(
//   "the computer picked: " +
//     computerSelection +
//     "\n" +
//     "the player picked: " +
//     playerSelection
// );
// playRound(playerSelection, computerSelection);
console.log(playGame());
// console.log("CS:   " + computerSelection);
