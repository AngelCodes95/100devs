//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function twentyOne21Times(){
    for (let i = 0; i < 21; i++){
        console.log('21');
    }
}
twentyOne21Times()

//Bonus can you make it print '21' 21 times to the dom?
function savageSays(){
    for(let i =0; i < 21; i++){
        document.querySelector('#savageSays').innerText += " 21"
    }
}

savageSays()