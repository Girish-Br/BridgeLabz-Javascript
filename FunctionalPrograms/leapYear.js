/******************************************************************************
 *  @Purpose        : To check if year is leap year or not.   
 *  @file           : leapyear.js
 *  @overview       : To take year from user which must be divisible by 4 and 400 and 
                        must not divisible by 100 if by 4 and print leap year.
 *  @author         : GIRISH B R
 *  @since          : 02-11-2019
 ******************************************************************************/
let util = require('../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-Sync");
//explains what input should be given
var year = readline.question("enter year:");
//we can also do the process by converting integer to string using toString() and check the length
function LeapYear() {
    //executes if length of given input is 4 and is a number
    if (year.length == 4) {
        util.leapYear(year);
        if (true) {
            console.log("it is leap year");
        }
        if (false) {
            console.log("not a leap year");
        }
    }
    //displays if length of input is not 4
    else {
        console.log("enter 4 digit number");
    }
}
LeapYear(year);