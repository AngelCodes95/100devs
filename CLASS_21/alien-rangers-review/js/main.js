//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let powerRangers = ['Mighty Morphin', 'Alien Rangers', 'Zeo']

powerRangers.forEach(show => console.log(show))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1,2,4,8,7,5]

console.log(nums.filter(n => n % 2 === 0))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
let numsArr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

function sumSecondLowHigh(arr){
    let sorted = arr.sort((a,b) => a-b)
    alert(sorted[1] + sorted[sorted.length -2])
}

sumSecondLowHigh(numsArr)