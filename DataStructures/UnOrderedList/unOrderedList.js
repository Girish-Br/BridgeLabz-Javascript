/************************************ 
* @Purpose : Read the Text from a file, split it into words and arrange it as Linked List. 
*          Take a user input to search a Word in the List. If the Word is not found then add it to the list, 
*          and if it found then remove the word from the List. In the end save the list into a file.
* @File   : unOrderedList.js
* @Author : Girish B R
* @Date   : 5-11-2019
**************************************/
//built in library for reading file
const fs=require("fs");
//to import data from linkedList file
var util=require('../../utility/dataStructuresProgramsUtility');
//to make user interact with script via console
var readline=require("readline-sync");
//to take data from file2 
var data = fs.readFileSync('./unorderedList.txt');
console.log("String read from file: \n\n"+data);
//convert data to string and split
stringArray= data.toString().toLocaleLowerCase().split(' ');
console.log(stringArray);
//word to search
searchWord=readline.question("enter word to search:");
//call function
util.unorderedList(stringArray,searchWord);
