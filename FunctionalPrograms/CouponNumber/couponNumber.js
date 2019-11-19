/******************************************************************************
 *  @Purpose        : total random number needed to have all distinct numbers
 *  @file           : couponNumber.js
 *  @overview       : Given N distinct Coupon Numbers, how many random numbers do you need to generate 
                      distinct coupon number? This program simulates this random process.
 *  @author         : GIRISH B R
 *  @since          : 02-11-2019
 *******************************************************************************/
let util=require('../../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take input
var n = readline.question("enter number of coupons:");
var coupanList = new Array();
coupanList = util.getGeneratedCoupon(n);
console.log("The " + n + " Distinct Coupans are:");
console.log(coupanList); //prints the coupan numbers
// Method to generate coupan number and returns to the main method
