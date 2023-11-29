//--- Easy
//create a variable and assign it a number
let theNumber = 2 + 9;
//minus 10 from that number
theNumber = theNumber - 10;
//print that number to the console
console.log(theNumber)
//--- Medium
//create a variable that holds a value from the input
let userInput = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
userInput = userInput + 25;
//alert that number
alert(userInput)
//--- Hard
//create a variable that holds the h1
const h1Holder = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
document.querySelector('h1').addEventListener('click', console.log(parseInt(theNumber) + parseInt(userInput)))