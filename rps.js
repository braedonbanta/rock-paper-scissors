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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        winner = playRound(humanChoice, computerChoice);
        if (winner == "human") {
            humanScore++
        } else if (winner = "computer") {
            computerScore++
        }
        console.log("Human score:", humanScore);
        console.log("Computer score:", computerScore);
    }
}

playGame();