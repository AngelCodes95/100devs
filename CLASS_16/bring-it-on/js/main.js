// *Variables*
// Create a variable and console log the value
let num = 10;
console.log(num)
// Create a variable, add 10 to it, and alert the value
let secondNum = 20
secondNum = secondNum + 10
alert(secondNum)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumsAndAlert(a,b,c,d){
    alert(a - b - c - d)
}
subFourNumsAndAlert(5,1,1,1)
// Create a function that divides one number by another and returns the remainder
function returnRemainder(a,b){
    return(a % b)
}
console.log(returnRemainder(12,3))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function alertJumanji(a,b){
    if(a + b > 50){
        alert('Jumanji')
    }
}
alertJumanji(50,1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeMaybeAlert(a,b,c){
    let product = (a * b * c)
    if(product % 3 === 0){
        alert("ZEBRA")
    }
}
multiplyThreeMaybeAlert(3,3,3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordAndNumber(word,num){
    for(let i = 0; i < num; i++){
        console.log(word)
    }
}

wordAndNumber('bob', 21)