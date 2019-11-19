/**************************************** 
* @Purpose : Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system. 
*           your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016. 
*          Use Regex to replace name, full name, Mobile#, and Date with proper value.  
* @File    : message.js
* @Author  : Girish B R
* @Date    : 02-11-2019
****************************************/
var readline = require("readline-sync");
var firstName,lastName,fullName, contactNumber, date;
var message = "Hello <<name>>, We have your full name as <<full name>> in our system."
    + "Your contact number is 91-XXXXXXXXXX. Please, let us know in case of any clarification."
    + "Thank you BridgeLabz 01/01/2016.";
getDetails();
function getDetails()
{
    firstName =readline.question("Enter Your First Name : ")
    lastName =readline.question("Enter Your Last Name : ")
    fullName = firstName+' '+lastName;
    contactNumber =readline.question("Enter contact number : ")
    //if(isNaN(contactNumber)) throw "Enter valid mobile no.";
    date =readline.question("Enter date in dd/mm/yyyy format: ")
    replace("<<name>>", firstName);
    replace("<<full name>>", fullName);
    replace("XXXXXXXXXX", contactNumber);
    replace("01/01/2016", date);
    console.log(message);
}
function replace(replaceString,replaceStringValue) {
    message = message.replace(replaceString,replaceStringValue);
}