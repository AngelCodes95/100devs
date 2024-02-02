//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Slug extends Animal{
    constructor(name, type, shell){
        super(name)
        this.type = type
        this.shell = shell
    } 
}

class Seal extends Animal{
    constructor(name, size){
        super(name)
        this.size = size
    }
    arfArf(){
        console.log('arf arf')
    }
} 