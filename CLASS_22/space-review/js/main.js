//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbersArr = [1,2,3,4,5,6,7,8]
// acc is accumulator. add value to accumulator.. 0 is for starting accumulator at zero.
let sum = numbersArr.reduce((acc, value) =>acc + Number(value), 0 )
console.table(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const nums = [1,2,3,4,5,6,7,8]

function arrTimesArr(arr){
    return arr.map(a => a * a);
}
console.log(arrTimesArr(nums))
//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str){
    const reversed = str.split('').reverse().join('');
    console.log(reversed);
}
reverseString('legnA')
//Create a function that takes in a string
//Alert if the string is a palindrome or not


// coming back to this one later when im a G at code. 