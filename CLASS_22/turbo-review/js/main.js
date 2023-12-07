// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = ' lemonade ';
console.log(favDrink.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let stringOfWords = 'One of these words is apple';
if (stringOfWords.includes('apple')){
    console.log('Apple was found');
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
    let shoot = Math.random()
    if (shoot < .3333){
        return 'rock'
    }else if (shoot > .3333 && shoot < .6666){
        return 'paper'
    }else{ 
       return 'scissors'
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRPS(playerChoice){
    // let playerChoice = prompt('rock, paper, or scissors?').toLowerCase()
    let botChoice = rockPaperScissors()
    if ((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper')){
        console.log('Player Wins!');
    }else if ((botChoice === 'rock' && playerChoice === 'rock') || (botChoice === 'paper' && playerChoice === 'paper') || (botChoice === 'scissors' && playerChoice === 'scissors')){
        console.log('tie!');
    }else{
        console.log('Bot Wins!')
    }
}
// playRPS()
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr){
    arr.forEach( choice => playRPS(choice))
}

playGameXTimes(['rock', 'paper', 'scissors'])