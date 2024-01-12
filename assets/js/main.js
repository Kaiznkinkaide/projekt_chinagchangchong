
// radio
const radio = document.getElementById('radio')
const radio5 = document.getElementById('radioFive')
const radio10 = document.getElementById('radioTen')
const radio15 = document.getElementById('radioFifthteen')
const radio20 = document.getElementById('radioTwenty')

// score
let youScore = document.getElementById('youScore')
let compScore = document.getElementById('compScore')
let output = document.querySelector('#output')
// input
let Rock = document.getElementById('rock')
let Paper = document.getElementById('paper')
let Scissors = document.getElementById('scissors')
// restart
let restart = document.getElementById('restart')

//tools
let i = 0
let iPlayer = 0
let iCom = 0
let number;




const compTurn = (choice) => {
    let randomChoice = Math.round(Math.random() * 2);
    
    if (randomChoice == 0) {
        randomChoice = 'Rock';
    } else if (randomChoice == 1) {
        randomChoice = 'Paper';
    } else {
        randomChoice = 'Scissors';
    }
    

    if (choice.id == randomChoice.toLowerCase()) {
        counter()
        output.textContent = 'Draw';
        radioForLoop()
    } else {
        counter()
        if (choice == Rock) {
            if (randomChoice == 'Scissors') {
                output.textContent = `rock beats ${randomChoice}`;
                iPlayer ++
                youScore.textContent = iPlayer
                
            } else if (randomChoice == 'Paper') {
                output.textContent = `${randomChoice} beats rock`;
                iCom ++
                compScore.textContent = iCom
            }
        } if (choice == Paper) {
            if (randomChoice == 'Rock') {
                output.textContent = `paper beats ${randomChoice}`;
                iPlayer ++
                youScore.textContent = iPlayer
                
            } else if (randomChoice == 'Scissors') {
                output.textContent = `${randomChoice} beats paper`;
                iCom ++
                compScore.textContent = iCom
            }
        } if (choice == Scissors) {
            if (randomChoice == 'Paper') {
                output.textContent = `scissors beats ${randomChoice}`;
                iPlayer ++
                youScore.textContent = iPlayer
            } else if (randomChoice == 'Rock') {
                output.textContent = `${randomChoice} beats scissors`;
                iCom ++
                compScore.textContent = iCom
            }
        } radioForLoop()
    } 
}

// ruft bei click auf das jeweilige symbol die funktion mit dem parameter auf
rock.addEventListener('click', function (){
    compTurn(Rock)
})
paper.addEventListener('click', function (){
    compTurn(Paper)
})
scissors.addEventListener('click', function (){
    compTurn(Scissors)
})

const restartFunction = () =>{
    iPlayer = 0
    youScore.textContent = iPlayer
    iCom = 0
    compScore.textContent = iCom
    i = 0
    output.textContent = "Let's play"
    // outputRounds.style.display = 'initial'
    window.location.reload()
}

restart.addEventListener('click', () =>{
    restartFunction()
})


// Wählt aus wenn das radio ausgewählt, mit wieviel runden gestartet wird
const radioForLoop = () => {
    if (radio5.checked) {
        number = 5
        radio.innerHTML = `<div>${i} / ${number} </div>`
        radioChoice(5)
    } else if (radio10.checked){
        number = 10
        console.log(number);
        radio.innerHTML = `<div>${i} / ${number} </div>`
        radioChoice(10)
    }else if (radio15.checked){
        number = 15
        radio.innerHTML = `<div>${i} / ${number} </div>`
        radioChoice(15)
    }else if (radio20.checked){
        number = 20
        radio.innerHTML = `<div>${i} / ${number} </div>`
        radioChoice(20)
    }
}

const inputField = document.querySelector('.inputField')
// Zählt den Score und vergleicht wer am Ende gewinnt
const radioChoice = (x) => {
    console.log('icom', iCom);
    console.log('play', iPlayer);
        // output.textContent = "Let's play"
        if(i == x && iPlayer > iCom){
            inputField.innerHTML = ''
            output.innerHTML = "Player wins"
            // output.innerHTML = ''

        } else if (i == x && iCom > iPlayer){
            inputField.innerHTML = ''
            output.innerHTML = "Com wins"
            // output.innerHTML = ''

        }
        else if(i == x && iCom == iPlayer){ 
            inputField.innerHTML = ''
            output.innerHTML = "it's a draw"
            // output.innerHTML = ''
        }

}

// einfach Zählfunktion
const counter = () =>{
    i++
}
