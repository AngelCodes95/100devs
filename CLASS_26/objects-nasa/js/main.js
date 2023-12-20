//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPhotoOfDay)

function getPhotoOfDay(){
    const userDate = document.querySelector('input').value 
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`


fetch(apiUrl)
.then(res => res.json())
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(`Error ${err}`)
});
}