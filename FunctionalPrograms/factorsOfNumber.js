/******************************************************************************
 *  @Purpose        : To find prime factors of a number.
 *  @file           : factorsOfNumber.js
 *  @overview       : To take number from user and find its factor and print it in array. 
 *  @author         : GIRISH B R
 *  @since          : 02-11-2019
 ******************************************************************************/
let util=require('../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take user input
var n = readline.question("enter number:");
//calling function
util.factorsOfNumber(n);