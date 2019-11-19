/********************************************* 
* @Purpose :  Read in a list of words from File. Then prompt the user to enter a word to search the list. 
*            The program reports if the search word is found in the list. 
* @File    : binarySearch.js
* @Author  : Girish B R
* @Date    : 29-10-2019
*********************************************/
let util=require('../../utility/algorithmProgramUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//to read from fs
const fs=require("fs");
var stringArray = fs.readFileSync("../file1.txt").toString().split(" "); //read the file and split it to array
console.log("file1.txt string list");
console.log(stringArray);
//get word to search
var searchWord = readline.question("enter word to search:");
//call binary search function() and assign result
var result =util.binarySearch(stringArray, searchWord);
if (result == -1) {
    console.log(searchWord + " is not present");
}
else {
    console.log(searchWord + " is present at index " + result);
}
