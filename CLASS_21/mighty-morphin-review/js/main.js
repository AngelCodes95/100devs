// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'Christmas';
favHoliday = ('thanksgiving').toUpperCase();
console.log(favHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let thisVariable = 'this string'

let lastThree = thisVariable.slice(-3);
console.log(lastThree)
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNums(a,b,c,d,e){
    alert(Math.abs(100 - a - b - c - d - e))
}
fiveNums(1,2,3,4,5)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowToHighLog(a,b,c){
    const min = Math.min(a,b,c);
    const max = Math.max(a,b,c);
    console.log(`${min} is lowest, and ${max} is hghest`);
}

lowToHighLog(1,5,50)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsTails(){
//     let result = Math.random()
//     if (result < .5){
//          return 'heads'
//     }else{
//         return 'tails'
//     }
// }
// ternary example of the above
const headsTails = _ => Math.random() < .5 ? 'heads' : 'tails';
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipALot(x){
    for(let i = 1; i <= x; i++){
        result = headsTails()
        console.log(result)
    }
}
flipALot(10)