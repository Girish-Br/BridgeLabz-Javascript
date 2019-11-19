/******************************************************************************
 *  @Purpose        : To find power of two through command line .   
 *  @file           : powerOfTwo.js
 *  @overview       : To take command line for getting power of two which should not exceed 31.
 *  @author         : GIRISH B R
 *  @since          : 02-11-2019
 ******************************************************************************/
let util=require('../../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take input
var num= readline.question("enter number:");
util.PowerOfTwo(num);
//checks input if it is between o and 32
