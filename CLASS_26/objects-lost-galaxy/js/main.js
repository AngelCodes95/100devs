//Create a Pizza object that has four properties and three methods
let pizza = {}
    pizza.cheese = 'Mozzarella';
    pizza.shape = 'round';
    pizza.toppings =['cheese', 'pepperoni', 'jalapenos'];

    pizza.crunch = function(){
        console.log('What a crunchy bite');
    }
    pizza.slice = function(s){
        s = Number(s);
        console.log(`You grabbed ${s} slices!`);
    }
    pizza.frisbee = function(){
        console.log('YEEEET');
    }

// so ... to create a new pizza.... we have to edit the code above. Instead we can make a constructor. 
