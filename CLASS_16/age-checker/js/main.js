//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click', ageChecker)

function ageChecker(userInput){
    //Take the value from the input
    let age = document.querySelector('#danceDanceRevolution').value
    if(age < 16){
        age = `${age} no driving priviledges`;
    }
    else if (age < 18){
        age = `${age} you are still not allowed on our side of the club`;
    }
    else if(age < 21){
        age = `${age} you no drink, ok?`;
    }
    else if(age < 25){
        age = `${age} your rates for rentals are high`;
    }
    else if(age < 30){
        age = `${age} you still cant rent nice cars affordably`;
    }
    else if(age >= 30){
        age = `${age} nothing cool left to wait on`;
    }else{
        age = `${age} error, somehow`;
    }
    //Place the result of the conditional in the paragraph
    document.querySelector('p').innerText = age;
}
