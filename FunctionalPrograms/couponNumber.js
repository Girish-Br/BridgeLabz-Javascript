let util=require('../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take input
var n = readline.question("enter number of coupons:");
var coupanList = new Array();
coupanList = util.getGeneratedCoupon(n);
console.log("The " + n + " Distinct Coupans are:");
console.log(coupanList); //prints the coupan numbers
// Method to generate coupan number and returns to the main method
