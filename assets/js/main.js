
// radio
let radio = document.getElementById('radio')
let radio5 = document.getElementById('radioFive')
let radio10 = document.getElementById('radioTen')
let radio15 = document.getElementById('radioFifthteen')
let radio20 = document.getElementById('radioTwenty')
// score
let youScore = document.getElementById('youScore')
let compScore = document.getElementById('compScore')
// input
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
// restart
let restart = document.getElementById('restart')

//tools
let i = 0


const compTurn = () =>{
    let randomChoice = Math.round(Math.random() *2)
    console.log(randomChoice);
    let randomPic = Math.round(Math.random() *2)
    console.log(randomPic);
    i++
    console.log(i);
}
compTurn()

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



