let util=require('../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//explains what input should be given
var n = readline.question("enter number of flips:");
//calling function()
util.flipCoin(n);
