document.querySelector('#check').addEventListener('click', check)

function check() {
  // set the input of day to lowercase for checking with conditionals
  const day = document.querySelector('#day').value.toLowerCase();
  // grab the h2 for the answer
  const answer = document.querySelector('#placeToSee');
  
  // Update the h2 based on the conditionals
  if (day === 'tuesday' || day === 'thursday'){
    answer.textContent = 'CLASS DAY'
  }else if (day === 'saturday' || day === 'sunday'){
    answer.textContent = 'WEEKEND'
  }
  else{
    answer.textContent = 'BORING DAY'
  }
}