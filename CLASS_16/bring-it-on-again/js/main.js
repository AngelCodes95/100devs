// *Variables*
// Declare a variable, assign it a value, and alert the value
let valueOne = 10;
alert(valueOne)
// Create a variable, divide it by 10, and console log the value
let valueTwo = 20;
valueTwo /= 10;
console.log(valueTwo)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function alertTheProduct(a,b,c){
    alert(a * b * c)
}
alertTheProduct(3,3,3) // should alert 27
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNumsAndStuff(a,b,c,d){
    let firstTwo = a + b;
    let secondTwo = c - d;
    console.log(firstTwo,secondTwo)
}
fourNumsAndStuff(1,2,5,3)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function winnerWinner(a,b,c){
    let startingNumber = 100;
    let doLogic = (((startingNumber + a) - b) / c)
    if(doLogic > 25){
        console.log('WE HAVE A WINNA')
    }
}
winnerWinner(90,5,5) // answer should be 37, thus triggering we have a winna 

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfWeek(day){
    if(day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday'){
        alert("WEEKEND!")
    }else{
        alert('WEEKDAY!')
    }
}

dayOfWeek('Saturday')


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(a){
    for (i = 1; i <= a; i+=3){
        console.log(i)
    }
}

countByThree(155)