//Write your pseduo code first! 
// get temp from user
document.querySelector('#yell').addEventListener('click', convertToF);
// make a function for converting it
function convertToF(){
    // make a temp variable, give it the user inputted value
    let tempInC = Number(document.querySelector('tempInCelsius').value);
    // the conversion rate is  °F = °C × (9/5) + 32
    temp = temp * 9/5 + 32;
    // display result of conversion to user
    document.querySelector('#placeToYell').innerText = `${temp} degrees Farenheight`
}