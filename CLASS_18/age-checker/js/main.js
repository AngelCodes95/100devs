function ageChecker(userInput){
//Create a conditonal that checks their age
    let age = document.querySelector("#danceDanceRevolution").value
//If under 16, tell them they can not drive
    if (age < 16){
        age =  `${age} no driving priviledges!`;
    }
//If under 18, tell them they can't hate from outside the club, because they can't even get in
    else if(age < 18){
        age = `${age} you can't hate from our side of the club, you can't even get in!`
    }
//If under 21, tell them they can not drink
    else if(age < 21){
        age =  `${age} you can't drink!`
    }
//If under 25, tell them they can not rent cars affordably
    else if(age < 25){
        age = `${age} you can't rent cars affordably!`
    }
//If under 30, tell them they can not rent fancy cars affordably
    else if(age < 30){
        age = `${age} you still can't rent fancy cars affordably`
    }
//If under over 30, tell them there is nothing left to look forward too
    else if(age > 30){
        age = `${age}, there is nothing cool left to wait on, sorry!`
    }
    document.querySelector('p').innerText = age;
}

//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click', ageChecker)
//Take the value from the input

//Place the result of the conditional in the paragraph
