
// radio
let radio = document.getElementById('radio')
let radio5 = document.getElementById('radioFive')
let radio10 = document.getElementById('radioTen')
let radio15 = document.getElementById('radioFifthteen')
let radio20 = document.getElementById('radioTwenty')
// score
let youScore = document.getElementById('youScore')
let compScore = document.getElementById('compScore')
let output = document.querySelector('#output')
// input
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
// restart
let restart = document.getElementById('restart')

//tools
let i = 0
let iPlayer = 0
let iCom = 0


const compTurn = (choice) => {
    let randomChoice = Math.round(Math.random() * 2);
    let randomPic = Math.round(Math.random() * 2);
    i++;

    if (randomChoice == 0) {
        randomChoice = 'Rock';
    } else if (randomChoice == 1) {
        randomChoice = 'Paper';
    } else {
        randomChoice = 'Scissors';
    }

    if (choice == randomChoice) {
        output.textContent = 'Draw';
    } else {
        if (choice == rock) {
            if (randomChoice == 'Scissors') {
                output.textContent = 'Player win';
            } else if (randomChoice == 'Paper') {
                output.textContent = 'Com win';
            }
        } if (choice == paper) {
            if (randomChoice == 'Rock') {
                output.textContent = 'Player win';
            } else if (randomChoice == 'Scissors') {
                output.textContent = 'Com win';
            }
        } if (choice == scissors) {
            if (randomChoice == 'Paper') {
                output.textContent = 'Player win';
            } else if (randomChoice == 'Rock') {
                output.textContent = 'Com Win';
            }
        }
    }
}
compTurn()

rock.addEventListener('click', function (){
    compTurn(rock)
})
paper.addEventListener('click', function (){
    compTurn(paper)
})
scissors.addEventListener('click', function (){
    compTurn(scissors)
})


restart.addEventListener('click', () =>{
    compTurn()
})

const radioChoice = () => {
    if (radio5.checked && i <= 5){
        compTurn() 
    }else if(radio10.checked){
        compTurn()
    }else if(radio15.checked){
        compTurn()
    }else if(radio20.checked){
        compTurn()
    }
        
}

radio.addEventListener('change', () =>{
    radioChoice()
})
