/************************************ 
* @Purpose : checking palindrome of string using Dequeue
* @File   : palindromeChecker.js
* @Author : Girish B R
* @Date   : 7-11-2019
*************************************/
// make user interact via console
var readline = require("readline-sync");
//import dequeue file
var dequeue = require('../../utility/dataStructuresProgramsUtility');
//here we read the input from user 
var str = readline.question("Enter string: ");
function palindromeChecker() {
    //validating if found any character string.
    if (str >= 'a' && str <= 'z' || str >= 'A' && str <= 'Z') {
        dequeue.Palindrome(str);
    }
    else if (str == "") {
        console.log("please enter a string");
    }
    else {
        console.log("enter valid strings");
    }
}
palindromeChecker();