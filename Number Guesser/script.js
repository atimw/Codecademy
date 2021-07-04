let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 0;

// Write your code below:
/* generate a rendom number between 0-9*/
function generateTarget(){
    return Math.floor(Math.random()*10);
}

function getAbsoluteDistance(num1,num2){
    return Math.abs(num1 - num2);
}

function checkInput(num1,num2){
    if (num1 <= 9 && num1 >= 0 && num2 <= 9 && num2 >= 0){
        return true;
    }
}

/* compare guesses of user and computer */
function compareGuesses(human,computer,target){
    /* convert human and computer guesses to absolute value of guess compared to target */
    // if not before the first round
    if (currentRoundNumber > 0){
        //check user input
        if (checkInput(human,computer)){
            const userGuess = getAbsoluteDistance(target,human);
            const computerGuess = getAbsoluteDistance(target,computer);
            return userGuess <= computerGuess;
        } else {
            alert('Please enter a number between 0 and 9');
        }
}
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