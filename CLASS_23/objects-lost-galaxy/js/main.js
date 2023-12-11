//Create a dog object that has four properties and three methods
let dog  = {}

dog.color = 'golden';
dog.breed = 'retriever';
dog.hair = 'long';
dog.goodBoy = true;

dog.bark = function(){
    console.log('dog barked');
}

dog.jump = function(){
    console.log('dog jumped');
}

dog.fetch = function(){
    console.log('dog fetched item');
}