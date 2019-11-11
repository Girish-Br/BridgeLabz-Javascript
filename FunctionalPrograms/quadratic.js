/******************************************************************************
 *  @Purpose        : To find roots of given equation.   
 *  @file           : quadratic.js
 *  @overview       : To take input values of equation from user to get roots for the given equation.
 *  @author         : GIRISH B R
 *  @since          : 02-11-2019
 ******************************************************************************/
let util=require('../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take inputs a,b and c from user
var a = readline.question("enter a value:");
var b = readline.question("enter b value:");
var c = readline.question("enter c value:");
util.Quadratic(a,b,c);