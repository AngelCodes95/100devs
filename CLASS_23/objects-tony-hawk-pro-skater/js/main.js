//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkFighter(characterName, characterStance, characterSponsor, characterSpecialMove){
    this.name = characterName
    this.stance = characterStance
    this.sponsor = characterSponsor
    this.special =characterSpecialMove
    // methods 
    this.flip = function() {
        console.log('Character Kickflip!')
    }
    this.taunt = function(){
        console.log(`Dont make me use my ${this.special}`)
    }
    this.grab = function(){
        console.log('Melon Grab!')
    }
}

let kareemCampbell = new TonyHawkFighter('Kareem', 'goofy', 'element', 'Ghetto Bird')