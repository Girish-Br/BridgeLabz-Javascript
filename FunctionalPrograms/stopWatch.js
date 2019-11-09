var readline=require('readline-sync');
var startTimer = 0;
var stopTimer = 0;
var elapsed=0;

//to start timer
function start() {
    var d=new Date();
    startTimer = d.getMilliseconds();
    console.log("Start Time is: " + (startTimer));
}

// to stop timer
function stop() {
    var d=new Date();
    stopTimer = d.getMilliseconds();
    console.log("Stop Time is: " + (stopTimer));
}

function getElapsedTime() {
    elapsed = Math.abs(Number(stopTimer) - Number(startTimer));
    return elapsed;
}
var readline = require("readline-sync");
readline.question("Press 'Enter' to Start Time: ");
start(); //to start the time call start method

readline.question("Press 'Enter' to Stop Time: ");
stop();  // to stop call stop method

var l = getElapsedTime(); //it will return elapsed time

console.log("Total Time Elapsed(in millisec) is:" + l);
console.log("Converting millisec to seconds: " + (Number(l) / 100) + " sec"); //converting millisecond to seconds

