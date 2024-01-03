//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
document.addEventListener('keydown', function(Event){
    if(Event.key === 'Enter'){
        getDrink()
    }
})

function getDrink(){
    // let drink = document.querySelector('input').value

    fetch(`https://cat-fact.herokuapp.com/facts`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data[0].text
    })
    .catch(err => {
        console.log(`Error ${err}`)
    });
}