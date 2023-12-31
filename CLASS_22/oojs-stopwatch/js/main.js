// stopwatch implementation code-along

function Stopwatch(){
    let startTime, endTime, running, duration = 0;
    // start implementation
    this.start = function(){
        if(running)
            throw new Error('Stopwatch is already started');

        running = true;

        startTime = new Date();
    };
    // stop implementation
    this.stop = function(){
        if (!running)
            throw new Error("Stopwatch isn't running!");

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get function() { return duration }
    });
}
