document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
// I added a yellow smurf, random rgb that looked cool to me
document.getElementById('yellow').onclick = partyYellow



function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

// yellow background color on click
function partyYellow(){
  document.querySelector('body').style.backgroundColor = 'rgba(255,255,0)'
  document.querySelector('body').style.color = 'white'
}
