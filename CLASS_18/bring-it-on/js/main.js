// *Variables*
// Create a variable and console log the value
let thisVariable = 10;
console.log(thisVariable)
// Create a variable, add 10 to it, and alert the value
let variableTwo = 10;
variableTwo += 10;
alert(variableTwo)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourAndAlert(a,b,c,d){
    alert(a-b-c-d)
}
// Create a function that divides one number by another and returns the remainder
function returnRemainder(a,b){
    return a % b;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoJumanji(a,b){
    sum = a + b;
    if(sum > 50){
        alert('Jumanji!')
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divideZebra(a,b,c){
    product = a * b * c;
    if(product % 3 === 0){
        alert('ZEBRA!')
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNum(word, num){
    for(let i = 0; i < num; i++){
        console.log(word)
    }
}