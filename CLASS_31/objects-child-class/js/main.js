//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class slug extends Animal{
    constructor(name, type, shell){
        super(name)
        this.type = type
        this.shell = shell
    } 
}