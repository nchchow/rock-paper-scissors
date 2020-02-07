game();

function computerPlay() {
    // randomly return rock, paper or scissors
    let selections = ["Rock", "Paper", "Scissors"];
    let rand = Math.random() * 3;
    let i = parseInt(rand);
    return selections[i];
}

function playRound(playerSelection, computerSelection) {
    var results = '';
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === "Rock") {
                results = "It's a tie! ";
            }
            if (computerSelection === "Paper") {
                results = "You lose! ";
            }
            if (computerSelection === "Scissors") {
                results = "You win! ";
            }
            break;
        case 'paper':
            if (computerSelection === "Rock") {
                results = "You win! ";
            }
            if (computerSelection === "Paper") {
                results = "It's a tie! ";
            }
            if (computerSelection === "Scissors") {
                results = "You lose! ";
            }
            break;
        case 'scissors':
            if (computerSelection === "Rock") {
                results = "You lose! ";
            }
            if (computerSelection === "Paper") {
                results = "You win! ";
            }
            if (computerSelection === "Scissors") {
                results = "It's a tie! ";
            }
            break;
    }
    return results;
}

function game() {
    var playerScore = 0;
    var computerScore = 0;

    const playerSelection = window.prompt("Type in your selection");
    const computerSelection = computerPlay();
    let results = playRound(playerSelection, computerSelection);
    if (results === "You win! ") {
        ++playerScore;
    }
    if (results === "You lose! ") {
        ++computerScore;
    }
    console.log(results + "this round")


    if (playerScore === computerScore) {
        console.log("It's a tie for this game!")
    } else {
        let finalResults = "You ";
        playerScore > computerScore ? finalResults += "win " : finalResults += "lose ";
        finalResults += "this game!";
        console.log(finalResults);
    }
}

