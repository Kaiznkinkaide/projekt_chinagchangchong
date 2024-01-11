
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
let number = 5




const compTurn = (choice) => {
    let randomChoice = Math.round(Math.random() * 2);
    let randomPic = Math.round(Math.random() * 2);
    console.log(i);

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
        counter()

        if (choice == rock) {
            if (randomChoice == 'Scissors') {
                output.textContent = `rock beats ${randomChoice}`;
                console.log(choice.id);
                iPlayer ++
                youScore.textContent = iPlayer
                
            } else if (randomChoice == 'Paper') {
                output.textContent = `${randomChoice} beats rock`;
                iCom ++
                compScore.textContent = iCom
            }
        } if (choice == paper) {
            if (randomChoice == 'Rock') {
                output.textContent = `paper beats ${randomChoice}`;
                iPlayer ++
                youScore.textContent = iPlayer
                
            } else if (randomChoice == 'Scissors') {
                output.textContent = `${randomChoice} beats paper`;
                iCom ++
                compScore.textContent = iCom
            }
        } if (choice == scissors) {
            if (randomChoice == 'Paper') {
                output.textContent = `scissors beats ${randomChoice}`;
                iPlayer ++
                youScore.textContent = iPlayer
            } else if (randomChoice == 'Rock') {
                output.textContent = `${randomChoice} beats scissors`;
                iCom ++
                compScore.textContent = iCom
            }
        }
    } radioChoice()
}


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
    radio.innerHTML = `
    <input type="radio" name="radio" id="radioFive">
    <label for="five">5</label>
    <input type="radio" name="radio" id="radioTen">
    <label for="ten">10</label>
    <input type="radio" name="radio" id="radioFifthteen">
    <label for="fifthteen">15</label>
    <input type="radio" name="radio" id="radioTwenty">
    <label for="twenty">20</label>`
}



restart.addEventListener('click', () =>{
    restartFunction()
})

const radioChoice = (x, y) => {
    
    if (radio5.checked){
        output.textContent = "Let's play"
        number = 5
        if(i == 5 && iPlayer > iCom){
            output.textContent  = "Player wins"
            setTimeout(2000, restartFunction())

        } else if (i == 5 && iCom > iPlayer){
            output.textContent  = "Com wins"
            setTimeout(2000, restartFunction())
        }
        else if(i == 5 && iCom == iPlayer){ 
            
            output.textContent = "it's a draw"
            setTimeout(2000, restartFunction())
        }
    }else if(radio10.checked){
        output.textContent = "Let's play"
        number = 10
        if(i == 10 && iPlayer > iCom){
            output.textContent  = "Player wins"
            setTimeout(2000, restartFunction())


        } else if (i == 10 && iCom > iPlayer){
            restartFunction()
            output.textContent  = "Com wins"
        } else if(i == 10 && iCom == iPlayer){ 
            restartFunction()
            output.textContent = "it's a draw"
        }
    }else if(radio15.checked){
        output.textContent = "Let's play"
        number = 15
        if(i == 15 && iPlayer > iCom){
            console.log("OHHHHHHH");
            restartFunction()
            output.textContent  = "Player wins"

        } else if (i == 15 && iCom > iPlayer){
            restartFunction()
            output.textContent  = "Com wins"
        }
    }else if(radio20.checked){
        output.textContent = "Let's play"
        number = 20
        if(i == 20 && iPlayer > iCom){
            
            restartFunction()
            output.textContent  = "Player wins"

        } else if (i == 20 && iCom > iPlayer){
            restartFunction()
            output.textContent  = "Com wins"
        }
        else if(i == 20 && iCom == iPlayer){ 
            restartFunction()
            output.textContent = "it's a draw"
        }
    }
        
}

const counter = () =>{
    i++
    radio.innerHTML = `<div>${i} / ${number} </div>`
}

radio.addEventListener('change', () =>{
    radioChoice()
})
