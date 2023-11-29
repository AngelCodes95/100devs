// Tasks for the 'variables' homework in the below section

// 1a- working with variables
// declare two variables, assign them to admin and name
let admin, personName;
// assign 'John' to personName
personName = 'John';
// assign personName to admin
admin = personName;
// alert the value of admin
alert(admin);

// 1b- giving the right name
// Create a variable with the name ourPlanet
let ourPlanet = 'Earth';
// creat a variable to store the name of the current visitor to a website
let visitorIsHere = '_';

// 1c-examine birthday code
// not sure how to code an answer for this. but: 
// BIRTHDAY should be all caps because it doesnt change
// age should be lowercase because it changes annually


// JS 'FUNCTIONS-BASICS' TASKS BELOW THIS POINT

// 2a- is 'else' required?
// confusing, but no difference. If its false both run the same. 

// 2b- rewrite function using '?' or '||'
//  no clue how to do this one without looking at the solution, so the solution is copied below! credits to op.
// solution with ?
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
// solution with ||
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

// 2c- function min(a,b)
// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a,b){
    if (a > b){
        return b;
    }else if (a < b){
        return a;
    }
}

// 2d- Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// my attempt
function pow(x,n){
    return(x**n);
}
// given solution for reference 
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }

//  There are no tasks at the bottom of the "function expressions" reading. Skipping

// below is the task for the 'arrow functions' reading
// task, take the below code and insert arrow functions in place of the current functions
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

//   after arrow functions
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
  );