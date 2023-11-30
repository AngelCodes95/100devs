// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let on = true
alert(on)

// Declare a variable, reassign it to your favorite color, and console log the value
let favoriteColor = 'something'
favoriteColor = 'blue'
console.log(favoriteColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function firstThreeByFourth(a,b,c,d){
    // works with return so I put console log to have a visual of it working. 
    returnIt = console.log((a*b*c)/d)
}
firstThreeByFourth(3,3,3,3)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function firstByLast(a,b){
    console.log(a**b)
}
firstByLast(2,4)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function alertBool(bool,str){
    if(boolValue = true){
        alert(str)
    }else{
        console.log(str)
    }
}
alertBool(true, 'hippo')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function loopPractice(num1){
    for(i = 1; i <= num1; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        }else if(i % 5 === 0){
            console.log('Buzz')
        }else if(i % 3 === 0){
            console.log('Fizz')
        }else{
            console.log(i)
        }
    }
}
loopPractice(15)