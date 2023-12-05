//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiAllNumsArray(arr){
    let product = 1;
    arr.forEach(num => product *= num)
    alert(product)
}
// 2240
multiAllNumsArray([1,2,4,8,7,5])