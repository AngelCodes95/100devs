//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getQuote)
document.addEventListener('keydown', function(Event){
    if(Event.key === 'Enter'){
        getQuote()
    }
})

function getQuote(){
    fetch(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data[0]
    })
    .catch(err => {
        console.log(`Error ${err}`)
    });
}