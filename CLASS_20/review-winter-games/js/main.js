//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenFromArray(arr){
    let evens = [];
    arr.forEach(num => {
        if(num % 2 === 0){
            evens.push(num)
        }
    })
    console.table(evens)
}

evenFromArray([1,2,3,4,5,6])