/* playing vs someone. Draw cards, higher card wins. Same card means we go to 'war' and put up 3 cards, flip 4th, winner of 4th flip takes all 8 cards. Win by having all the cards */ 
let deckID = '';

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => res.json())
.then(data => {
    console.log(data)
    deckID = data.deck_id
})
.catch(err => {
    console.log(`Error ${err}`)
});
// wait for click of button, draw two cards
document.querySelector('button').addEventListener('click', drawTwo);

//  draw two using global variable deck id
function drawTwo(){
    const url = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // grab each of the cards returned from the fetch and place the objects image as the image under h2's
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image
        // assign card values to players
        let player1Val = convertToNum(data.cards[0].value)
        let player2Val = convertToNum(data.cards[1].value)
        // comparisons to see who has the higher card
        if (player1Val > player2Val){
            // manipulates h3 to be Player 1 win
            document.querySelector('h3').innerText = 'Player 1 Wins!'
        }else if (player1Val < player2Val){
            document.querySelector('h3').innerText = 'Player 2 Wins!'
        }else{
            document.querySelector('h3').innerText = 'Tie! Time for War!'
        }

    })
    .catch(err => {
        console.log(`Error ${err}`)
    });
}

function convertToNum(value){
    if(value === 'ACE'){
        return 14
    }else if (value === 'KING'){
        return 13
    }else if (value === 'QUEEN'){
        return 12
    }else if (value === 'JACK'){
        return 11
    }else{
        return Number(value)
    }
}