/*****************************************
* @Purpose : Balnced paranthesis using stack business logic. 
* @file   :balancedParanthesis.js
* @author :Girish B R
* @Date   :08-11-2019
****************************************/
//to make user interact via console
var readline = require("readline-sync");
//user input
var expression=readline.question("Enter Expression:");
//import the file
var stack=require('../../utility/dataStructuresProgramsUtility'); 
stack.balancedParanthesis(expression);