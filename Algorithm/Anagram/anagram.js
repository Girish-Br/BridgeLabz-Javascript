/************************************************ 
* @Purpoase : To check anagram like One string is an anagram of another if the second 
*           is simply a rearrangement of the first.
* @Author   : Girish B R
* @Date     : 02-11-2019
**********************************************/
let util=require('../../Utility/algorithmProgramUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take two input of strings
var s1 = readline.question("enter first string:");
var s2 = readline.question("enter second string:");
util.anagram(s1,s2);
 