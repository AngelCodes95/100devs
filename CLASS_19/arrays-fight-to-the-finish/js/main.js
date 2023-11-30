//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['Fast and Furious', '2 Fast 2 Furious', 'Tokyo Drift']

movies.forEach((x) => document.querySelector('h2').innerText += ` ${x}, `)

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numList = [1,3,5,7,9]

numList.forEach((item,index) => {numList[index] = item + 3})

//Find the average of all the numbers from question three
let sum = 0

// numList.forEach((num) => sum += num)

// or this way works, seen below
for(let i = 0; i < numList.length; i++){
    sum += numList[i]
}

console.log(sum/numList.length)