// global references
var playerScore = 0;
var computerScore = 0;

// html references
const resultsTag = document.querySelector('#results');
const playerScoreTag = document.querySelector('#playerscore');
const computerScoreTag = document.querySelector('#computerscore');

// buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.id, computerPlay());
    })
});

function computerPlay() {
    // randomly return rock, paper or scissors
    let selections = ["Rock", "Paper", "Scissors"];
    let rand = Math.random() * 3;
    let i = parseInt(rand);
    return selections[i];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === "Rock") {
                results = "It's a tie! ";
            }
            if (computerSelection === "Paper") {
                results = "You lose! ";
                ++computerScore;
            }
            if (computerSelection === "Scissors") {
                results = "You win! ";
                ++playerScore;
            }
            break;
        case 'paper':
            if (computerSelection === "Rock") {
                results = "You win! ";
                ++playerScore;
            }
            if (computerSelection === "Paper") {
                results = "It's a tie! ";
            }
            if (computerSelection === "Scissors") {
                results = "You lose! ";
                ++computerScore;
            }
            break;
        case 'scissors':
            if (computerSelection === "Rock") {
                results = "You lose! ";
                ++computerScore;
            }
            if (computerSelection === "Paper") {
                results = "You win! ";
                ++playerScore;
            }
            if (computerSelection === "Scissors") {
                results = "It's a tie! ";
            }
            break;
    }
    updatePoints();
    resultsTag.textContent = results + "This round!";
    if(playerScore === 5 || computerScore === 5) {
        displayFinalResults();
        playerScore = 0;
        computerScore = 0;
    }
    return results;
}

function displayFinalResults() {
    let finalResults = "You ";
    playerScore > computerScore ? finalResults += "win " : finalResults += "lose ";
    finalResults += "this game!";
    resultsTag.textContent = finalResults;
}

function updatePoints() {
    playerScoreTag.textContent = "You: " + playerScore;
    computerScoreTag.textContent = "Computer: " + computerScore;
}
