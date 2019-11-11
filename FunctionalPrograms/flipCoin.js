  /******************************************************************************
 *  @Purpose        : To count percentage of heads and tails.
 *  @file           : flipcoin.js
 *  @overview       : To flip a coin N no. of times and randomly generate a number 
                        and print percentage of heads and tails  
 *  @author         : GIRISH B R
 *  @since          : 02-11-2019
 ******************************************************************************/
let util=require('../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//explains what input should be given
var n = readline.question("enter number of flips:");
//calling function()
util.flipCoin(n);
