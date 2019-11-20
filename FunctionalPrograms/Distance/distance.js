/******************************************************************************
 *  @Purpose        : To calculate Euclidean distance.
 *  @file           : distance.js
 *  @overview       : takes two integer command­line arguments x and y and prints the Euclidean distance 
                     from the point (x, y) to the origin (0, 0)
 *  @author         : GIRISH B R
 *  @since          : 02-11-2019
 *******************************************************************************/
let util=require('../../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take x and y values from user
var x=readline.question("enter x value:");
var y=readline.question("enter y value:");
//fucntion to calculate
var distance=util.Distance(x,y);
console.log("the euclidean distance is:"+distance);
