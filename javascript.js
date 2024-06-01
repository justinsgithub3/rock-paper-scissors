
/*
function that gets computers choice (computersChoice)
    variable assigned math.random returns value x
    if x is <= .333 then make computer assigned rock
    if x is <=.666 && >.333 then make computer assigned paper
    if x is >666 then make computer assigned scissors
    return computer value
*/


    



/* 
function that gets human choice (getHumanChoice)
    variable assigned to prompt("rock, paper, or scissors?")
    return(variable)
*/



/*
human score variable assigned to 0
if human scores then human variable goes up 1 point
*/


/*
computer score variable assigned to 0
if computer scores then computer variable goes up 1 point
*/



/*
function for a single round(humanChoice , computerChoice)
    if humanChoice is rock and computerChoice is rock then tie.
    if humanChoice is rock and computerChoice is paper then computerChoice wins.
    if humanChoice is rock and computerChoice is scissors then humanChoice wins.
    if humanChoice is paper and computerChoice is rock then humanChoice wins.
    if humanChoice is paper and computerChoice is paper then tie.
    if humanChoice is paper and computerChoice is scissors then computerChoice wins.
    if human choice is scissors and computerChoice is rock then computerChoice wins.
    if humanChoice is scissors and computerChoice is paper then humanChoice wins.
    if humanChoice is scissors and computerChoice is scissors then tie.

    return that says you win or lose!
*/
/*
function playGame() {
    let score = [0,0];
    let humanScore = 0;
    let computerScore = 0;
    if (score == [1,0]) {
        humanScore++;
    } else if (computerScore == [0,1]) {
        computerScore++;
    } 
    if (humanScore == 5) {
        console.log("Congratulations! You won.");
        return "done";
    } else if (computerScore == 5) {
        console.log("Congratulations!  You won the game.");
        return "done";
    } else {
        playRound();
    }
}
let x = playRound();
let y = playRound();
let z = playRound();
let a = playRound();
let b = playRound();
let total = x + y + z + a + b;
console.log(total)

*/
/* Debugging 
    if (human == "rock") {
        console.log("Human is rock");
        } else if (human == "paper") {
            console.log("Human is paper");
        } else if (human == "scissors") {
            console.log("Human is scissors");
        } else {
            console.log("There was a typo.");
        } 
    if (computer == "rock") {
        console.log("Computer is rock");
        } else if (computer == "paper") {
            console.log("Computer is paper");
        } else if (computer == "scissors") {
            console.log("Computer is scissors");
        } else {
            console.log("There was a typo.");
        }
Debugging ^^^^^^^^ */


function getComputerChoice(){
    let computerValue = Math.random();
    let computerChoice;
    if (computerValue <= 0.333) {
        computerChoice = "rock";
    } else if (computerValue <= 0.666 && computerValue > 0.333) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}
function getHumanChoice() {
    let humanChoiceB = prompt("Rock, paper, or scissors? Best of 5 wins."); /* humanChoiceB is just Before it gets lowercased. */
    let humanChoice = humanChoiceB.toLowerCase();
    return humanChoice;
}

function playRound( human = getHumanChoice() , computer = getComputerChoice() ) {
    let computerScore = 0;
    let humanScore = 0;
    let whoWon;
    if (human == "rock" && computer == "rock") {
        console.log("Its a tie.");
    } else if (human == "rock" && computer == "paper") { /*human chooses rock*/
        whoWon = "computer";
        console.log("Computer won.");
    } else if (human == "rock" && computer == "scissors") {
        whoWon = "human";
        console.log("Human won.");
    } else if (human == "paper" && computer == "rock") { /*human chooses paper*/
        whoWon = "human";
        console.log("Human won.");
    } else if (human == "paper" && computer == "paper") {
        console.log("Its a tie.");
    } else if (human == "paper" && computer == "scissors") {
        whoWon = "computer";
        console.log("Computer won.");
    } else if (human == "scissors" && computer == "rock") { /*human chooses scissors*/
        whoWon = "computer";
        console.log("Computer won.");
    } else if (human == "scissors" && computer == "paper") {
        whoWon = "human";
        console.log("Human won.");
    } else if (human == "scissors" && computer == "scissors") {
        console.log("Its a tie.");
    } else {
        console.log("There must have been a typo. We will scratch this round.");
    }
    return whoWon
}

function fullGame() {
    let humanScore = 0;
    let computerScore = 0;
    firstRound = playRound()
    if (firstRound == "human") {
        humanScore++;
    } else if (firstRound == "computer") {
        computerScore++;
    }
    secondRound = playRound()
    if (secondRound == "human") {
        humanScore++;
    } else if (secondRound == "computer") {
        computerScore++;
    }   
    thirdRound = playRound()
    if (thirdRound == "human") {
        humanScore++;
    } else if (thirdRound == "computer") {
        computerScore++;
    }
    fourthRound = playRound()
    if (fourthRound == "human") {
        humanScore++;
    } else if (fourthRound == "computer") {
        computerScore++;
    }
    fifthRound = playRound()
    if (fifthRound == "human") {
        humanScore++;
    } else if (fifthRound == "computer") {
        computerScore++;
    }

    if (humanScore > computerScore) {
        console.log("You win! Congrats.");
    } else if (humanScore < computerScore) {
        console.log("You lose! Try again.");
    } else {
        console.log("Wow! A tie.")
    }
}

fullGame()



























