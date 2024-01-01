//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPhotoOfDay, {passive: true});

function getPhotoOfDay(){
    const userDate = document.querySelector('input').value 
    const api_key = 'hLA5sRyvo1ZQO4hxqsjbwoiMh4xFSc28RV21ulUz'
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${userDate}`


fetch(apiUrl)
.then(res => res.json())
.then(data => {
    console.log(data)
    if (data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
    }else if (data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
    }
    document.querySelector('h3').innerText = data.explanation
})
.catch(err => {
    console.log(`Error ${err}`)
});
}

/* playing vs someone. Draw cards, higher card wins. Same card means we go to 'war' and put up 3 cards, flip 4th, winner of 4th flip takes all 8 cards. Win by having all the cards */