
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
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
// restart
let restart = document.getElementById('restart')

//tools
let i = 0
let iPlayer = 0
let iCom = 0
let number;
let winner;

// fight
let youChoice = document.getElementById('youChoice')
let compChoice = document.getElementById('compChoice')
let fightOutput = document.getElementById('fight')
let explosionAudio = new Audio("./assets/sound/Freesound - Huge Explosion.flac by CGEffex.mp3")
let winnerOutput = document.querySelector('#winner');





const compTurn = (choice) => {
    
    let randomChoice = Math.round(Math.random() * 2);
    
    if (randomChoice == 0) {
        randomChoice = 'rock';
    } else if (randomChoice == 1) {
        randomChoice = 'paper';
    } else {
        randomChoice = 'scissors';
    }
    

    if (choice.id == randomChoice) {
        counter()
        output.textContent = 'Draw';
        winner = "draw"
        fight(choice, randomChoice, winner)
        radioForLoop()
    } else {
        counter()
        if (choice == rock) {
            if (randomChoice == 'scissors') {
                output.textContent = `rock beats ${randomChoice}`;
                iPlayer ++
                youScore.textContent = iPlayer
                winner = choice.id
                console.log("player",winner);
                fight(choice, randomChoice, winner)
            } else if (randomChoice == 'paper') {
                output.textContent = `${randomChoice} beats rock`;
                iCom ++
                compScore.textContent = iCom
                winner = randomChoice
                console.log("icom",winner);
                fight(choice, randomChoice, winner)
            }
        } if (choice == paper) {
            if (randomChoice == 'rock') {
                output.textContent = `paper beats ${randomChoice}`;
                iPlayer ++
                youScore.textContent = iPlayer
                winner = choice.id
                console.log("player",winner);
                fight(choice, randomChoice, winner)
                
            } else if (randomChoice == 'scissors') {
                output.textContent = `${randomChoice} beats paper`;
                iCom ++
                compScore.textContent = iCom
                winner = randomChoice
                console.log("icom",winner);
                fight(choice, randomChoice, winner)
            }
        } if (choice == scissors) {
            if (randomChoice == 'paper') {
                output.textContent = `scissors beats ${randomChoice}`;
                iPlayer ++
                youScore.textContent = iPlayer
                winner = choice.id
                console.log("player",winner);
                fight(choice, randomChoice, winner)
            } else if (randomChoice == 'rock') {
                output.textContent = `${randomChoice} beats scissors`;
                iCom ++
                compScore.textContent = iCom
                winner = randomChoice
                console.log("icom",winner);
                fight(choice, randomChoice, winner)
            }
        } 
        radioForLoop()
        
    }
}

// ruft bei click auf das jeweilige symbol die funktion mit dem parameter auf
rock.addEventListener('click', function (){
    compTurn(rock)
})
paper.addEventListener('click', function (){
    compTurn(paper)
})
scissors.addEventListener('click', function (){
    compTurn(scissors)
})

const restartFunction = () =>{
    iPlayer = 0
    youScore.textContent = iPlayer
    iCom = 0
    compScore.textContent = iCom
    i = 0
    output.textContent = "Let's play"
    window.location.reload()
    readySound()
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
        if(i == x && iPlayer > iCom){
            inputField.innerHTML = ''
            fightOutput.innerHTML = ""
            const imgB = document.createElement('img')
        imgB.setAttribute('src', `./assets/img/playerWin.gif`)
        winnerOutput.appendChild(imgB)
        } else if (i == x && iCom > iPlayer){
            inputField.innerHTML = ''
            fightOutput.innerHTML = ""
            const imgB = document.createElement('img')
        imgB.setAttribute('src', `./assets/img/compWin.gif`)
        winnerOutput.appendChild(imgB)
        } else if(i == x && iCom == iPlayer){ 
            inputField.innerHTML = ''
            output.innerHTML = "it's a draw"
        }
}

const fight = (a,b, winner) => {
    a = a.id
    fightOutput.innerHTML = ""
    let imgA = document.createElement('img')
    let imgB = document.createElement('img')
    imgA.setAttribute('src', `./assets/img/${a}.gif`)
    imgB.setAttribute('src', `./assets/img/${b}.gif`)
    fightOutput.appendChild(imgA)
    fightOutput.appendChild(imgB)
    setTimeout( function() {
        fightOutput.innerHTML = ""
        explosionAudio.play()
        explosionAudio.volume = 0.2
        explosionAudio.playbackRate = 1.5
        imgA.setAttribute('src', `./assets/img/explosion.gif`)
        imgA.style.scale = "5"
        fightOutput.appendChild(imgA)
    },2000)
    setTimeout(function() {
        fightOutput.innerHTML = ""
        imgA.setAttribute('src', `./assets/img/${winner}.gif`)
        fightOutput.appendChild(imgA)
    }, 3000)
    if( winner == "draw"){
        setTimeout(function() {
            fightOutput.innerHTML = ""
        }, 11000)
    } else{
        setTimeout(function() {
        fightOutput.innerHTML = ""
    }, 5000)
    }
}

const getReady = () => {
    const readySound = new Audio('./assets/sound/Get Ready For The Next Battle! (Tekken7) - QuickSounds.com.mp3')
    readySound.play()
    readySound.volume = 0.2
}
getReady()

// einfach Zählfunktion
const counter = () =>{
    i++
}