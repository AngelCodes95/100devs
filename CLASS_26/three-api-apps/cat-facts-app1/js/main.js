//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getFact)
document.querySelector('button').addEventListener('click', newKitty)
// for the get fact function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// for the newKitty phto sizing
function getRandomIntBetween(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getFact(){
    fetch(`https://cat-fact.herokuapp.com/facts`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        randomFact = data[getRandomInt(4)].text
        // did this so I can check the console and see what number was returned to check and see if its grabbing the correlating fact. It is! yay!
        console.log(getRandomInt(4))
        // changes the h3 to a random fact from the api, it only returned 5 facts at the time of making this
        document.querySelector('h3').innerText = randomFact;
    })
    .catch(err => {
        console.log(`Error ${err}`)
    });
}

function newKitty(){
    let num = getRandomIntBetween(250, 750)
    document.querySelector('img').src = `http://placekitten.com/${num}/${num}`
}