/******************************************************************************
 *  @Purpose        : To find windchill through command line   
 *  @file           : windChill.js
 *  @overview       : Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour),
                      the National Weather Service defines the effective temperature (the wind chill) 
                       to be calculated.      
 *  @author         : GIRISH B R
 *  @since          : 02-11-2019
 ******************************************************************************/
let util=require('../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take t and v values from console
var t = readline.question("enter t value:");
var v = readline.question("enter v value:");
if ((t < 50) && (v < 120 || v > 3)) {
    var result=util.WindChill(t,v);
    console.log(result);
}
else{
    console.log("enter exact values");
}
