let util=require('../utility/algorithmProgramUtility');
//to make user interact with script code via console
var readline = require("readline-sync");
//take two input of strings
var s1 = readline.question("enter first string:");
var s2 = readline.question("enter second string:");
util.anagram(s1,s2);
 