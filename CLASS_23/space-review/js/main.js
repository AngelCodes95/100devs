//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbersArr = [2,5,6,8,4,34,6,43,234]
// use reduce method to create sum
let sum = numbersArr.reduce((acc, value) => acc + Number(value), 0 )
console.table(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const nums = [1,2,4,8,7,5]

function arrTimesArr(arr){
    return arr.map(a => a * a);
}
console.log(arrTimesArr(nums))
//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str){
    const reversed = str.split('').reverse().join('');
    return reversed.toString();
}
reverseString('desrever si gnirts siht')

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(userString){
    reversed = reverseString(userString)
    if(userString === reversed){
        console.log('Palindrome!')
    }else{
        console.log('not Palindrome.')
    }
}
isPalindrome('bob')