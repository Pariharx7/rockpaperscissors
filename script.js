let rock = 0;
let paper = 1;
let scissors = 2;

let playerScore = 0;
let compScore = 0;

function getComputerChoice(){
    let computerResponse = (Math.floor(Math.random() * 3));
    console.log(computerResponse);
    if(computerResponse == rock) {
        console.log('Computer Chooses Rock');
        return 'rock';}
    if(computerResponse == paper) {
        console.log('Computer Chooses Paper');
        return 'paper';}
    if(computerResponse == scissors) {
        console.log('Computer Chooses Scissors');
        return 'scissors';}
}

const result = document.querySelector('.results');
const playerScoreSpan = document.querySelector('.player-score');
const compScoreSpan = document.querySelector('.comp-score');
const winnerResult = document.querySelector('.winner-result');
const playAgain = document.querySelector('.play-again');

const rockButton = document.querySelector('.rock-button');
const papeButton = document.querySelector('.paper-button');
const scisButton = document.querySelector('.scissors-button');

const buttons = document.querySelectorAll('button');



function playSingleRound(playerChoice,computerMove){
   

    if(playerChoice == "rock") 
    {
        if(computerMove == "rock"){
            result.textContent = "It's a Tie!";
        } else if(computerMove == "paper"){
             compScore++;
             result.textContent = "You Lose!";
        } else {
            result.textContent = "You Win!";
            playerScore++;
        }
    }
    else if(playerChoice == "paper") 
    {
        if(computerMove == "paper"){
             result.textContent = "It's a Tie!";
        } else if(computerMove == "rock"){
            result.textContent = "You Win!";
            playerScore++;
        } else {
          result.textContent = "You Lose!";
          compScore++;
        }
    }
    else  {
        if(computerMove == "paper"){
            result.textContent = "You Win!";
            playerScore++;
        } else if(computerMove == "rock"){
             result.textContent = "You Lose!";
             compScore++;
        } else {
             result.textContent = "It's a Tie!";
        }
    }

}



function disableButton() {
    rockButton.disabled = true;
    papeButton.disabled = true;
    scisButton.disabled = true;
   
}



const newGame = document.createElement('div');
newGame.textContent = `Play again`;
newGame.classList.add('button', 'refresh');


function refreshPage() {
    window.location.reload(true);
}
newGame.addEventListener('click', refreshPage);

const updateScore = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}          `;
    compScoreSpan.innerText = ` Computer Score: ${compScore}`;
}

function checkForWinner(playerScore, compScore){
    if(playerScore === 5){
        disableButton();
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `You won by ${playerScore} to ${compScore} .Great Job Beating the Computer`;
        winnerResult.append(h2);
        playAgain.append(newGame);
         
    }
    if(compScore === 5){
        disableButton();
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `You lost by ${compScore} to ${playerScore} .Computer was clever than you this time`;
        winnerResult.append(h2);
        playAgain.append(newGame);
               
    }
}




buttons.forEach( button => button.addEventListener('click' ,() =>{
    
    const value = button.innerHTML.toLowerCase();
    

    playSingleRound(value, getComputerChoice());

    updateScore(playerScore, compScore);

    checkForWinner(playerScore, compScore)
}));


