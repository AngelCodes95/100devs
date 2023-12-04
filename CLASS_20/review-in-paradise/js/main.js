// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = 'oatmeal';
favFood = 'pizza';
alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let secondProblem = 'light work'
alert(secondProblem[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
const firstTwoByLast = (a,b,c) => {
    alert(((a / b) * c));
}

firstTwoByLast(10,2,4)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cubeRoot = (a) => {
    console.log(Math.cbrt(a).toFixed(4))
}
// expect 4 for cube root of 64
cubeRoot(64)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const summerMonths = ['june', 'july', 'august']
const yayBoo = () => {
    const month = prompt('Enter a month:').toLowerCase();
    if (summerMonths.includes(month)){
        alert('YAY')
    }else{
        alert('Booo')
    }
}
yayBoo() 

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const upToX = () => {
    const userInput = prompt('Enter a number:');
    for(let i = 1; i <= userInput; i++){
        if(i % 5 !== 0){
            console.log(i);
        }
    }
}
upToX()