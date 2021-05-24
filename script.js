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
console.log("This is a game of rock paper scissors")
console.log("Please choose")
console.log("Options:")
console.log(`Rock: Either "rock" or" 1 | Paper: Either "paper" or 2 | Scissors: Either "scissors" or 3"`)
var rock = 1;
var paper = 2;
var scissors = 3;
var userScore = 0;
var comScore = 0; 
var winner = "";
var userVar = "";
var comVar = getRndInteger(1,3);
console.log(comVar);



function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }




