//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getWord)

function getWord(){
    let userInput = document.querySelector('input').value.toLowerCase()
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data[0].meanings[0].definitions[0].definition
    })
    .catch(err => {
        console.log(`Error ${err}`)
    });
}