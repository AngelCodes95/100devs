//Create a button that adds 1 to a botScore stored in localStorage 
if(!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0)
}


document.querySelector('button').addEventListener('click', addAnothaOne)


function addAnothaOne(){
    let scoreValue = Number(localStorage.getItem('botScore'));
    scoreValue += 1;
    localStorage.setItem('botScore', scoreValue);
}


/* commenting this function out until i need pieces of it for api work.
function getPhotoOfDay(){
    const userDate = document.querySelector('input').value 
    const api_key = 'hLA5sRyvo1ZQO4hxqsjbwoiMh4xFSc28RV21ulUz'
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${userDate}`


fetch(apiUrl)
.then(res => res.json())
.then(data => {
    console.log(data)
    if (data.media_type === 'image'){
        document.querySelector('img').src = data.url
    }else if (data.media_type === 'video'){
        document.querySelector('img').src = data.hdurl
    }
    document.querySelector('h3').innerText = data.explanation
})
.catch(err => {
    console.log(`Error ${err}`)
});
} */

