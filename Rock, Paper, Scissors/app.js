// function to get user choice, make it lowercase and verify. If user chooses bomb, they always win.
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Invalid user input. Please input either rock, paper, or scissors.');
        return 'See Error';
    }
};

// function to get user choice based upon assignment of random numbers 0-2
const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            console.log('Computer choice error, contact developer');
            return 'See Error';
            break;
    }
}

// determine a winner, bomb always wins
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie game!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer wins!';
        } else {
            return 'The user wins!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer wins!';
        } else {
            return 'The user wins!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer wins!';
        } else {
            return 'The user wins!';
        }
    } else if (userChoice === 'bomb') {
        return 'The user wins!';
    }
}

// playGame function to echo user and computer choices and call determineWinner
function playGame() {
    let userChoice = getUserChoice('bomb');
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();