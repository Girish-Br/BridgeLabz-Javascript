/******************************************************************************
 *  @Purpose        : To find number of wins and percentage of wins through gambling. 
 *  @file           : gambler.js
 *  @overview       : Play till the gambler is broke or has won Print Number of Wins 
                        and Percentage of Win and Loss. 
 *  @author         : GIRISH B R
 *  @since          : 02-11-2019
 *******************************************************************************/
let util=require('../../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take $stake,$goal and number of tries from user
var $stake = readline.question("enter stake value:");
var $goal = readline.question("enter goal value:");
var n = readline.question("enter num of times:");
util.Gambler($stake,$goal,n);
