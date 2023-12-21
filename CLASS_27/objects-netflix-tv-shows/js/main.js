//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeShow{
    constructor(showType, showName, showDuration, showChannel){
        this.show = showType;
        this.name = showName;
        this.duration = showDuration;
        this.channel = showChannel;
    }
    closedCaption(){
        console.log("Closed Captions are on")
    }
    pauseShow(){
        alert('Show Paused!')
    }
    resumeShow(){
        alert('Show Resumed')
    }
}

let nedsDeclassified = new MakeShow('Survival Guide', 'Neds Declassified', '30 min', 'Nickelodeon')
