/*

Conditions:
game against computer
game should be able to run several times in a row and keep score
at the end report the winner, but also the results of each round

PSEUDOCODE:
initialize string variables for rock/paper/scissors
initialize variables that keep track of scores for both players
initialize starting message and ask user for input
take input from the user as either a string or a number corresponding to the available options rock/paper/scissors
save input in a variable userVar
let computer randomly roll an option
save to a variable comVar
compare userVar against comVar to determine winner
update scores
repeat game 5 times
compare score variables between both players to determine winner
print the winner and individual scores


call a function for the computer 
*/

var rock = 1;
var paper = 2;
var scissors = 3;
var userScore = 0;
var comScore = 0; 
var winner = "";
var comVar = getRndInteger(1,3);
var playerOption = playerSelection());



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
            userVar = 2;
            console.log(`You choose "paper"`);
        case "3":
        case "scissor":
            userVar = 3;
            console.log(`You choose "scissor"`);
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

