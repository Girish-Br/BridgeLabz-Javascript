/**********************************************
* @Purpose :  Reads the strings prints them in sorted order using insertion sort. 
* @File    : insertionSort.js
* @Author  : Girish B R
* @Date    : 29-10-2019
**********************************************/
var util=require('../../utility/algorithmProgramUtility')
//to make user interact with script code via console
var readline = require("readline-sync");
//take number of strings
var length = readline.question("Enter the total number of strings");
var array = new Array(length);
for (let i = 0; i < length; i++) {
    array[i] = readline.question("Enter the array " + (i+1) + "  value")
}
util.insertionSort(array);
console.log(array);
