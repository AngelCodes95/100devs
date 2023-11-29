//Write your pseduo code first! 
// get temperature from user, add smurf for click
document.querySelector('#yell').addEventListener('click', makeFarenheit)
// make conversion function
function makeFarenheit(){
    // initialize temp, get the value from html
    let temp = document.querySelector('#tempInCelsius').value
    // conversion: °F = °C × (9/5) + 32
    temp =  temp * 9/5 + 32
    // display result to user
    document.querySelector('#placeToYell').innerText = `${temp} degrees Farenheight`
}