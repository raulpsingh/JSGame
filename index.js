function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];


}




class Counter {
    constructor(score) {
        this.score = score;
    }
    getScore(){
        return this.score;
    }

    addScore(number){
        this.score=this.score+number
    }
    resetCounter(){
        this.score=0
    }

}

const counter = new Counter(0);

function singleRound(computerSelection, playerSelection){
    if (playerSelection === computerSelection) {
        return `It's a tie! you both picked ${playerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        counter.addScore(+1)
        return "You win! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        counter.addScore(+1)
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        counter.addScore(+1)
        return "You win! Scissors beats Paper";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        counter.addScore(-1)
        return "You lose! Paper beats Rock";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        counter.addScore(-1)
        return "You lose! Rock beats Scissors";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        counter.addScore(-1)
        return "You lose! Scissors beats Paper";
    }
}


class PlayersSelection{
    constructor(selection) {
        this.selection = selection;
    }
    getSelection(){
        return this.selection;
    }
    changeSelection(select){
        this.selection = select
    }
}

const selection = new PlayersSelection(null);



function rock() {
    selection.changeSelection('rock')
    game()
}
function paper() {
    selection.changeSelection('paper')
    game()
}
function scissors() {
    selection.changeSelection('scissors')
    game()
}


const div1 = document.createElement('div');
const body = document.body;
body.appendChild(div1);
const header1 = document.createElement('h1');
const header2 = document.createElement('h2');

function game(){
        const computerSelection = computerPlay();
        const playerSelection = selection.getSelection()


        header1.textContent = singleRound(computerSelection, playerSelection);
        header2.textContent = "Your score is " + counter.getScore();
        div1.insertAdjacentElement("beforebegin", header1)
        div1.insertAdjacentElement("afterbegin", header2)

        if(counter.getScore()===5){
            alert("You won!")
            counter.resetCounter()
        } else if(counter.getScore()===-5){
            alert("You lost!")
            counter.resetCounter()
        }



    if(counter.getScore()>0){
        console.log("You win with score of " + counter.getScore())

    } else if(counter.getScore()<0){
        console.log("You lost, computer wins with score of " + counter.getScore())

    }else if(counter.getScore()===0){
        console.log("It is a tie!")
    }
}


