//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeStreetFighter(punch, kick, block, catchPhrase, specialMove){
    this.punch = punch;
    this.kick = kick;
    this.block = block;
    this.catchPhrase = catchPhrase;
    this.specialMove = specialMove;
    // methods 
    this.taunt = function(){
        console.log(`You can't handle my ${this.specialMove}`);
    }
    this.winner = function(){
        console.log(`Haha! ${this.catchPhrase}`);
    }
    this.dash = function(){
        console.log(`whoop, missed me!`);
    }
}

let ryu = new MakeStreetFighter('high', 'high', 'low', 'get OVER HERE', 'HADUKEN')

let spongeBob = new MakeStreetFighter('weak', 'light', 'spongeyBlock', 'Gary, Attack!', 'BIG TOE')