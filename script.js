function getComputerChoice() {
    /*Return Randomly between Rock,Paper and Scissors 
    */
   let ch = Math.floor(Math.random()*3);
   if(ch<=0.9) {
    return "rock";
   } else if(option<=1.9) {
    return "paper";
   } else
    return "scissors";
}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice=prompt("Enter Input:");
    humanChoice=humanChoice.toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice());

//Player Score Variables (Global)
let humanScore=0;
let computerScore=0;

function playRound(humanChoice,ComputerChoice) {

}

function playGame() {

}