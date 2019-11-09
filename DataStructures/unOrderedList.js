//built in library for reading file
const fs=require("fs");
//to import data from linkedList file
var util=require('../utility/dataStructuresProgramsUtility');
//to make user interact with script via console
var readline=require("readline-sync");
//to take data from file2 
var data = fs.readFileSync('./file2.txt');
console.log("String read from file: \n\n"+data);
//convert data to string and split
stringArray= data.toString().toLocaleLowerCase().split(' ');
console.log(stringArray);
//word to search
searchWord=readline.question("enter word to search:");
//call function
util.unorderedList(stringArray,searchWord);
