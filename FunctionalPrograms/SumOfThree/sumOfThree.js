/******************************************************************************
 *  @Purpose        : To add the number is equal to 0   
 *  @file           : sumOfThree.js
 *  @overview       :  A program with cubic running time. Read in N integers and counts the 
                        number   of   triples   that   sum   to   exactly   0.
 *  @author         : GIRISH B R
 *  @since          : 02-11-2019
 ******************************************************************************/
let util=require('../../utility/functionalProgramsUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take input for size of the array
var size = readline.question("enter size:");
//creating new array
var arr = new Array(size);
for (let i = 0; i < size; i++) {
    arr[i] = readline.question("enter " + (i + 1) + " value:");
}
console.log(arr);
//function to find distinct triplets
var count = util.DistinctTriplets(arr, size);
console.log(count);
