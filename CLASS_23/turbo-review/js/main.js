// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'this string is my sentence and it is eleven words long?'
console.log(sentence.endsWith('?'))
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let devSentence = "i know im a jr.dev, i cant wait to be at FAANG"
console.log(devSentence.replaceAll('jr.dev', 'Sofware Engineer'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
 function rockPaperScissors(){
    let random = Math.random()
    if( random < .33){
        return 'rock'
    }else if (random < .66){
        return 'paper'
    }else {
        return 'scissors'
    }
 }
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice){
    let botChoice = rockPaperScissors()
    if((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'scissors' && botChoice === 'paper') || (playerChoice === 'paper' && botChoice === 'rock')){
        console.log('Player wins!')
    }else if ((playerChoice === 'rock' && botChoice === 'paper') || (playerChoice === 'paper' && botChoice === 'scissors') || (playerChoice === 'scissors' && botChoice === 'rock')){
        console.log('Bot wins')
    }else{
        console.log('tie')
    }
}
checkWin('paper')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr){
    arr.forEach( choice => checkWin(choice))
}

playGameXTimes(['rock', 'paper', 'scissors'])