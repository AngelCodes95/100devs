//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNumsAndAlert(n1,n2){
    alert(n1 - n2);
}
subTwoNumsAndAlert(3,2)
//create a function that divides three numbers and console logs the quotient
function divideThreeAndLog(one,two,three){
    console.log(one / two / three);
}
divideThreeAndLog(12,4,3)
//create a function that multiplys three numbers and returns the product
function multiplyThreeNumsReturn(num1,num2,num3){
    return ((num1 * num2) * num3);
}
let product = multiplyThreeNumsReturn(5,10,2)

alert(product)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function overMedium(a,b,c){
    let firstAns = parseInt(a + b);
    alert(firstAns/c)
}

overMedium(2,2,2)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hardMode(a,b,c,d){
    let firstTwo = a * b;
    if (firstTwo > 100){
        console.log(c + d)
    }else if (firstTwo < 100){
        console.log(c - d)
    }else{
        let firstThree = a * b * c;
        let result = firstThree / d;
        alert(result)
    }
}

hardMode(5,6,4,2)