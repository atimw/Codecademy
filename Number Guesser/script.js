let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;

// Write your code below:
/* generate a rendom number between 0-9*/
function generateTarget(){
    return Math.floor(Math.random()*9);
}

/* compare guesses of user and computer */
function compareGuesses(human,computer,target){
    /* convert human and computer guesses to absolute value of guess compared to target */
    const userGuess = Math.abs(target - human);
    const computerGuess = Math.abs(target - computer);
    return userGuess <= computerGuess;
}

/* update the winners score each round */
function updateScore(winner){
    switch (winner){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }
}

/* advance to the next round */
function advanceRound(){
    currentRoundNumber++;
}

/* test script */
generateTarget();
compareGuesses();
updateScore();
advanceRound();