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
