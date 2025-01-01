//get computer choice
let r="rock";
let p="paper";
let s="scissors";
let choice;
let humanScore=0;
let computerScore=0;
let round=0;
function getComputerChoice() {
    const random=Math.floor(Math.random()*3);
    if(random===0) {
        return r;
    } else if(random===1) {
        return p;
    } else {
        return s;
    }
}

// console.log(getComputerChoice()); //test

// get human choice
// function getHumanChoice() {
//     let choice=prompt("Enter rock , paper or scissors : ");
//     choice=choice.toLowerCase();
//     while(choice!=="rock" && choice !=="paper" && choice!=="scissors") {
//         console.log("Enter valid input: rock, paper or scissors:");
//         choice=prompt("Enter rock , paper or scissors : ");
//         choice=choice.toLowerCase();
//     }
//     return choice;
// }

//console.log(getHumanChoice()); //test

//play game

    
    function playRound(humanChoice,computerChoice) { //logic for game
        if(humanChoice===computerChoice) {
            return "Tie";
        } else if(
            (humanChoice===r && computerChoice===s) ||
            (humanChoice===p && computerChoice===r) ||
            (humanChoice===s && computerChoice===p)
        ) {
                humanScore++;
                return "You Win";
            } else {
                computerScore++;
                return "Computer Wins";
            }
    }
    // for(let round=1; round<=5; round++) {
    //     console.log(`\nRound: ${round}`);
    //     let humanSelection=getHumanChoice();
    //     console.log(`Human Choice: ${humanSelection}`);
    //     let computerSelection=getComputerChoice();
    //     console.log(`Computer Choice: ${computerSelection}`);
    //     console.log(playRound(humanSelection,computerSelection));
    //     console.log(`Current Score: You: ${humanScore}, Computer: ${computerScore}`);

    // }
    // if(humanScore>computerScore) {
    //     console.log("Final Result: You Won the Game!!");
    // } else if(humanScore<computerScore) {
    //     console.log("Final Result: Computer Won the Game!!");
    // } else {
    //     console.log("Final Result: It's a TIE !!")
    // }

function updateUI(humanChoice,computerChoice,result) {
    const resultDiv=document.querySelector("#result");
    const scoreDiv=document.querySelector("#score");
    const finalResultDiv=document.querySelector("#final-result");
    resultDiv.textContent=`Round ${round}: You choose ${humanChoice}, Computer choose: ${computerChoice}.${result}`;
    scoreDiv.textContent=`Current Score: You: ${humanScore}, Computer: ${computerScore}`;
    if(humanScore===5 || computerScore===5) {
        let finalMessage;
    if(humanScore===5) {
            finalMessage="Final Result: You Won the Game!!";
        } else if(humanScore!==5) {
            finalMessage="Final Result: Computer Won the Game!!";
        } else {
            finalMessage="Final Result: It's a TIE !!";
        }
    finalResultDiv.textContent=finalMessage;
    }
    
}



const buttons= document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click",() => {
        if(humanScore<5 && computerScore<5) {
            round++;
            const humanChoice=button.textContent.toLowerCase();
            const computerChoice=getComputerChoice();
            const result=playRound(humanChoice,computerChoice);
            updateUI(humanChoice,computerChoice,result);
        }
});
});