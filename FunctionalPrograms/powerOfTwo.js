let util=require('../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take input
var num= readline.question("enter number:");
util.PowerOfTwo(num);
//checks input if it is between o and 32
