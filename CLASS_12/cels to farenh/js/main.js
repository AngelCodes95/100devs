// task: convert celsius into farenhiet

// event listener for click
document.querySelector('#yell').addEventListener('click', makeFarenheit)
// make function to convert
function makeFarenheit(){
    let temp = document.querySelector('#cel').value
    
    // conversion: °F = °C × (9/5) + 32
    temp =  temp * 9/5 + 32

    // display to user
    document.querySelector('#placeToYell').innerText = temp +  ' degrees Farenheight'
}