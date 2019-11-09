//built in library for read file
const fs = require("fs"); 
//import the file 
var linkedList=require('../utility/dataStructuresProgramsUtility'); 
var readline = require("readline-sync");
//read the data txt file
var data = fs.readFileSync('./file3.txt'); 
console.log("Numbers data read from file: \n\n" + data);
 //user input to search element
searchNumber = readline.question("Enter a number to search:");
linkedList.orderedList(data,searchNumber);     


