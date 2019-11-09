let util=require('../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take x and y values from user
var x=readline.question("enter x value:");
var y=readline.question("enter y value:");
//fucntion to calculate
var distance=util.Distance(x,y);
console.log("the euclidean distance is:"+distance);
