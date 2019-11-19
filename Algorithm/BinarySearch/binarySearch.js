let util=require('../utility/algorithmProgramUtility');
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
