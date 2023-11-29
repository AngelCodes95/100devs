// //---Easy
// //create a function that subtracts two numbers and alerts the difference
function subTwo(a,b){
    let difference = a - b;
    alert(difference);
}
subTwo(9,5)
// //create a function that divides three numbers and console logs the quotient
function divideThree(a,b,c){
    let quotient = (a/b)/c;
    alert(quotient);
}
divideThree(100,4,5)
// //create a function that multiplys three numbers and returns the product
function multiplyThree(a,b,c){
    let product = a*b*c;
    alert(product)
}
multiplyThree(3,3,3)
// //---Medium
// //create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function magicThree(a,b,c){
    let sum1 = Number(a + b);
    let magic = sum1 / c;
    alert(magic) 
}
magicThree(10,10,5)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function quadMaths(a,b,c,d){
    let firstTwo = a + b;
    if (firstTwo > 100){
        console.log(b + c);
    }else if (firstTwo < 100){
        console.log(b - c);
    }else{
        let firstThreeProduct = a * b * c;
        let result = firstThreeProduct / d;
        alert(result);
    }
}
quadMaths(25,75,5,5)