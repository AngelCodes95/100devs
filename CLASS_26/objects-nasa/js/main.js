//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
fetch('https://api.nasa.gov/planetary/apod?api_key=')
    .then(res => res.json())
    .then(data => {
        console.log(data.date)
        // document.querySelector('img').src = 
    })
    .catch(err => {
        console.log(`Error ${err}`)
    });