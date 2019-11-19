/********************************************
* @Purpose :  Reads in integers prints them in sorted order using Bubble Sort. 
* @File    : bubbleSort.js
* @Author  : Girish B R
* @Date    : 28-10-2019
********************************************/
let util=require('../../utility/algorithmProgramUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take user input of array
var length = readline.question("enter total number of elements:");
var array = new Array(length);
for (let i = 0; i <= length - 1; i++) {
    array[i] = readline.question("enter the array" + (i + 1) + "value:");
}
//calling function()
util.bubbleSort(array);
//print sorted array
console.log(array);
