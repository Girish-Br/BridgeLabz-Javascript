  
/******************************************************************************
 *  @Purpose        : User Input and Replace String Template“Hello<<UserName>>,How are you?”
 *  @file           : replaceString.js
 *  @overview       : diplayname takes the userinput and print it with some sentence
 *  @author         : GIRISH B R 
 *  @since          : 02-11-2019
 ******************************************************************************/
//to make user interact with script code via console
var readline = require("readline-sync");
//explains what input should be given
var name = readline.question("enter username:");
var name1 = "hello <username>, how are you?";
//prints user input
console.log(name);
function ReplaceStr() {
    if (name.length > 3) {
        //replace user input with ,<username>
        var s3 = name1.replace("<username>", name);
        console.log(s3);
    }
    else {
        console.log("enter string value with more length");
    }
}
//calling function to replace the <username>
ReplaceStr()
