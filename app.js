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

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  console.log(
    "TOTAL SCORES: \n" +
      "Computer: " +
      computerScore +
      "\n" +
      "Player: " +
      playerScore
  );
}

playGame();
