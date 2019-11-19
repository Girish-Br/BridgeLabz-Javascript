//to make user interact via console
var read = require('readline-sync');
//import the file 
var Utility = require('../utility/dataStructuresProgramsUtility');
//read the value of persons from user to perform queue operations.
function bankingCash() {
    var input = read.question("Enter the number of transactions: ");
    //validating if found any character string.
    if (input >= 'a' && input <= 'z' || input >= 'A' && input <= 'Z') {
        console.log("Plz enter integers only....");
    }
    else {
        Utility.Banking(read, input);
    }
}
bankingCash();