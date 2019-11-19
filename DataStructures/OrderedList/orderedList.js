  /************************************************
* @purpose :Business logic of ordered linked list.
* @file   :orderedLinkedlist.js
* @author :Girish B R
* @date   :08-11-2019
***********************************************/
//built in library for read file
const fs = require("fs"); 
//import the file 
var linkedList=require('../../utility/dataStructuresProgramsUtility'); 
var readline = require("readline-sync");
//read the data txt file
var data = fs.readFileSync('./orderedList'); 
console.log("Numbers data read from file: \n\n" + data);
 //user input to search element
searchNumber = readline.question("Enter a number to search:");
linkedList.orderedList(data,searchNumber);     


