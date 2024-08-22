function getComputerChoice() {
    randomChoice = Math.random();
    if (randomChoice <= .33) {
        let computerChoice = "rock";
        return computerChoice;
    } else if (randomChoice <= .67) {
        let computerChoice = "scissors";
        return computerChoice;
    } else if (randomChoice <= 1) {
        let computerChoice = "paper"
        return computerChoice;
    }
}

function getHumanChoice() {
    let playerChoice = prompt("Please pick rock, paper, or scissors.");
    if (playerChoice.toLowerCase() == "rock" || playerChoice.toLowerCase() == "paper" || playerChoice.toLowerCase() == "scissors") {
        return playerChoice;
    } else {
        alert("Invalid response. Please try again.");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("Tie!");
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
            return("human");
        } else {
            console.log("You lose! Paper beats rock");
            return("computer");
    }
}
    if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            console.log("Tie!");
        } else if (computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            return("human");
        } else {
            console.log("You lose! Scissors beats rock");
            return("computer");
    }
}
    if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            console.log("Tie!");
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beats paper");
            return("human");
        } else {
            console.log("You lose! Rock beats scissors");
            return("computer");
        }
}
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const humanScoreboard = document.querySelector(".human");
const computerScoreboard = document.querySelector(".computer");

rockButton.addEventListener("click", function() {
    computerChoice = getComputerChoice();
    let roundResult = playRound("rock", computerChoice);
    if (roundResult == "human") {
        let currentScore = humanScoreboard.textContent.split(' ');
        currentScore = Number(currentScore[1]);
        currentScore++
        humanScoreboard.textContent = `Human: ${String(currentScore)}`;
        if (currentScore == 5) {
            alert("You win!");
        }
    } else if (roundResult == "computer") {
        let currentScore = computerScoreboard.textContent.split(' ');
        currentScore = Number(currentScore[1]);
        currentScore++
        computerScoreboard.textContent = `Computer: ${String(currentScore)}`;
        if (currentScore == 5) {
            alert("You lost!");
        }
    }
});

paperButton.addEventListener("click", function() {
    computerChoice = getComputerChoice();
    let roundResult = playRound("paper", computerChoice);
    if (roundResult == "human") {
        let currentScore = humanScoreboard.textContent.split(' ');
        currentScore = Number(currentScore[1]);
        currentScore++
        humanScoreboard.textContent = `Human: ${String(currentScore)}`;
        if (currentScore == 5) {
            alert("You win!");
        }
    } else if (roundResult == "computer") {
        let currentScore = computerScoreboard.textContent.split(' ');
        currentScore = Number(currentScore[1]);
        currentScore++
        computerScoreboard.textContent = `Computer: ${String(currentScore)}`;
        if (currentScore == 5) {
            alert("You lost!");
        }
    }
});


scissorsButton.addEventListener("click", function() {
    computerChoice = getComputerChoice();
    let roundResult = playRound("scissors", computerChoice);
    if (roundResult == "human") {
        let currentScore = humanScoreboard.textContent.split(' ');
        currentScore = Number(currentScore[1]);
        currentScore++
        humanScoreboard.textContent = `Human: ${String(currentScore)}`;
        if (currentScore == 5) {
            alert("You win!");
        }
    } else if (roundResult == "computer") {
        let currentScore = computerScoreboard.textContent.split(' ');
        currentScore = Number(currentScore[1]);
        currentScore++
        computerScoreboard.textContent = `Computer: ${String(currentScore)}`;
        if (currentScore == 5) {
            alert("You lost!");
        }
    }
});
