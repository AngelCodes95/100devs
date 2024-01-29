//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class makeEspresso{
    constructor(make, model, color, price){
        this.make = make
        this.model = model
        this.color = color
        this.price = price
    }
    froth(){
        console.log('Frothing...')
    }
    brew(){
        console.log('warming up...')
    }
    ice(){
        console.log('2 ice cubes added...')
    }
}

let gaggia = new makeEspresso('gaggia', 'pro', 'black', 400)