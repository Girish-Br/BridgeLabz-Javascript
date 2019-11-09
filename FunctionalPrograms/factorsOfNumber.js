let util=require('../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take user input
var n = readline.question("enter number:");
//calling function
util.factorsOfNumber(n);