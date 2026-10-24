const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  const randomIdx = Math.floor(Math.random() * options.length);
  return options[randomIdx];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper"));
}

let playerScore = 0;
let computerScore = 0;
const playerScoreSpanEl = document.getElementById("player-score");
const computerScoreSpanEl = document.getElementById("computer-score");

const optionsContainer = document.querySelector(".options-container")
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

const roundResultsMsgEl = document.getElementById("results-msg");
const winnerMsgEl = document.getElementById("winner-msg");
const resetGameBtn = document.getElementById("reset-game-btn");

function getRoundResults(userOption) {
  const computerOption = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption  , computerOption)) {
    playerScore++;
    return `${userOption} beats ${computerOption}!`;
  } else if (userOption === computerOption) {
    return "It's a tie, no one gets the point!";
  }
  computerScore++;
  return `${computerOption} beats ${userOption}!`;
}

function showResults(userOption) {
  roundResultsMsgEl.textContent = getRoundResults(userOption);
  playerScoreSpanEl.textContent = `${playerScore}`;
  computerScoreSpanEl.textContent = `${computerScore}`;
  if (playerScore === 3 || computerScore === 3) {
    winnerMsgEl.textContent = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`;
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
  }
}

rockBtn.addEventListener("click", () => showResults("Rock"));
paperBtn.addEventListener("click", () => showResults("Paper"));
scissorsBtn.addEventListener("click", () => showResults("Scissors"));

function resetGame() {
  playerScore = computerScore = 0;
  playerScoreSpanEl.textContent = playerScore;
  computerScoreSpanEl.textContent = computerScore;
  optionsContainer.style.display = "block";
  roundResultsMsgEl.textContent = "";
  winnerMsgEl.textContent = "";
  resetGameBtn.style.display = "none"
}

resetGameBtn.addEventListener("click", resetGame);