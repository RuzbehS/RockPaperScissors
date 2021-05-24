/*

Conditions:
game against computer
game should be able to run several times in a row and keep score
at the end report the winner, but also the results of each round

PSEUDOCODE:
initialize variables that keep track of scores for both players
initialize starting message and ask user for input
take input from the user as either a string or a number corresponding to the available options rock/paper/scissors
save input in a variable userVar
let computer randomly roll an option and save as a variable comVar
save to a variable comVar
compare userVar against comVar to determine winner
update scores
repeat game 5 times
compare score variables between both players to determine winner
print the winner and individual scores


call a function for the computer 
*/

var userScore = 0;
var comScore = 0; 

for (i = 0; i < 5; i++) {
    var playerOption = playerSelection();
    var comOption = getRndInteger(1,3);
    determineWinner();
    overallWinner();
}

function overallWinner() {
    console.log(`All games have been played. Overall scores:
    \nYou: ${playerOption}   Opponent: ${comOption}`)
    if (playerOption > comOption) {
        console.log(`Congratulations, you won!`)
    } else if (playerOption < comOption) {
        console.log(`What a shame, you lost!`)
    } else {
        console.log(`Oh wow, it's a draw!`)
    }
}

function determineWinner() {
    if (playerOption == 1 && comOption == 3) {
        userScore += 1;
        console.log(`Your opponent choose scissors. You won! \nScores 
        \nYou: ${userScore}    Opponent: ${comScore}`)
    } 
    else if (playerOption == 2 && comOption == 1) {
        userScore += 1;
        console.log(`Your opponent choose rock. You won! \nScores 
        \nYou: ${userScore}    Opponent: ${comScore}`)
    }
    else if (playerOption == 3 && comOption == 2) {
        userScore += 1;
        console.log(`Your opponent choose paper. You won! \nScores 
        \nYou: ${userScore}    Opponent: ${comScore}`)
    } 
    else if (playerOption == 1 && comOption == 2) {
        comScore += 1;
        console.log(`Your opponent choose paper. You lost! \nScores 
        \nYou: ${userScore}    Opponent: ${comScore}`)
    } 
    else if (playerOption == 2 && comOption == 3) {
        comScore += 1;
        console.log(`Your opponent choose scissors. You lost! \nScores 
        \nYou: ${userScore}    Opponent: ${comScore}`)
    } 
    else if (playerOption == 3 && comOption == 1) {
        comScore += 1;
        console.log(`Your opponent choose rock. You lost! \nScores 
        \nYou: ${userScore}    Opponent: ${comScore}`)
    } else {
       console.log(`You and the opponent had the same selection. It's a draw!`);
    }
}


function playerSelection() {
    var userVar = prompt(`This is a game of rock paper scissors \nOptions: \n 
    Rock: Either "rock" or" 1 \nPaper: Either "paper" or 2 \nScissors: Either "scissors" or 3 \n
    Please choose:`, "");
    haveSelection = false;

    while (haveSelection == false) {
        switch (userVar.toLowerCase()) {
        case "1":
        case "rock":
            console.log(`You choose "rock"`);
            return userVar = 1;
        case "2":
        case "paper":
            console.log(`You choose "paper"`);
            return userVar = 2;
        case "3":
        case "scissor":
            console.log(`You choose "scissor"`);
            return userVar = 3;
        default:
           var userVar = prompt(`Your selection did not correspond to the available options. \nPlease try again! \nOptions:
           \nRock: Either "rock" or" 1 \nPaper: Either "paper" or 2 \nScissors: Either "scissors" or 3
           \nPlease choose:`, "");
           break;
        }
    }
}

function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

