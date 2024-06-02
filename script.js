let humanScore = 0;
let computerScore =0;
        function playRound(humanChoice, computerChoice){
            console.log(`The computer chose : ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
            if(humanChoice == "rock"){
                if(computerChoice == "rock") console.log("Tie");
                if(computerChoice == "paper") {computerScore++; console.log("You Lose! Paper beats Rock");}
                if(computerChoice == "scissors") {humanScore++; console.log("You Win! Rock beats Scissors");}
            }
            if(humanChoice == "paper"){
                if(computerChoice =="rock") {humanScore++; console.log("You Win! Paper beats Rock");}
                if(computerChoice == "paper") console.log("Tie");
                if(computerChoice == "scissors") {computerScore++; console.log("You Lose! Scissors beats Paper");}
            }
            if(humanChoice == "scissors"){
                if(computerChoice == "rock") {computerScore++; console.log("You Lose! Rock beats Scissors");}
                if(computerChoice == "paper") {humanScore++; console.log("You Win! Scissors beats Rock");}
                if(computerChoice == "scissors") console.log("Tie");
            }
            updatesScores();
        }
        function getComputerChoice(){
            let computer = parseInt(Math.random()*3);
            switch(computer){
                case 0:
                    return "rock";
                case 1:
                    return "paper";
                case 2:
                    return "scissors";
            }
        }

        
        
        // function getHumanChoice(){
        //     let human = prompt("Pick Rock Paper or Scissors");
        //     human = human.toLowerCase();
        //     if(human != "rock" && human != "paper" && human != "scissors"){
        //         getHumanChoice();
        //     }
        //     return human;
        // }

        // function playGame(){
        //     humanScore = 0;
        //     computerScore = 0;
        //     for(let i = 0; i<5; i++){
        //         let humanSelection = getHumanChoice();
        //         let computerSelection = getComputerChoice();
        //         playRound(humanSelection, computerSelection);
        //     }
        //     console.log(`Final Scores:\nComputer: ${computerScore}\nHuman: ${humanScore}`);
        // }
        // playGame();

const btn = document.querySelectorAll("button")
btn.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.className;
        const computerChoice = getComputerChoice();
        if(humanScore < 5 && computerScore < 5){
            playRound(humanChoice, computerChoice);
            checkForWinner();
        }
    });   
});

function checkForWinner() {
if(humanScore == 5 || computerScore == 5){
    const winner = document.createElement('p')
    winner.innerText = `${humanScore ==5 ? "Human Wins\t" : "Computer Wins\t"}`
    document.body.appendChild(winner)
    const redoButton = document.createElement('button')
    redoButton.innerText = `Play Again`
    document.body.appendChild(redoButton)
        redoButton.addEventListener('click', () =>{
            humanScore = 0; computerScore = 0;
            updatesScores();
            redoButton.remove();
            winner.remove();
        });
}
}

const scoresDiv = document.createElement('div')
document.body.append(scoresDiv);
updatesScores();
function updatesScores() {
    scoresDiv.innerText = `Scores:\nComputer: ${computerScore}\nHuman: ${humanScore}`;
}