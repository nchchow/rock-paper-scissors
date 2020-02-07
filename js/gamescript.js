game();

var playerScore = 0;
var computerScore = 0;

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

    console.log(playerSelection);
    console.log(computerSelection);
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
    console.log(results);
    return results;
}

function game() {

    // let results = playRound(playerSelection, computerSelection);
    // if (results === "You win! ") {
    //     ++playerScore;
    // }
    // if (results === "You lose! ") {
    //     ++computerScore;
    // }
    // console.log(results + "this round")


    // if (playerScore === computerScore) {
    //     console.log("It's a tie for this game!")
    // } else {
    //     let finalResults = "You ";
    //     playerScore > computerScore ? finalResults += "win " : finalResults += "lose ";
    //     finalResults += "this game!";
    //     console.log(finalResults);
    // }
}

