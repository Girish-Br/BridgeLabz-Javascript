/************************************* 
* @Purpose : to create calendar and display
* @File   : calendar.js
* @Author : Girish B R
* @Date   : 5-11-2019
*************************************/
var readline=require("readline-sync");
var calendar = require('../../utility/dataStructuresProgramsUtility');
/*
* it will prints the month
*/
var months = [
    "",
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];
/*
* days[i] = number of days in month i
*/
var days = [
    0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];
try {
    var month =readline.question("enter month:");
    var year = readline.question("enter year:");
    var newMonth = parseInt(month);
    var newYear = parseInt(year);

    if (newMonth < 1 || newMonth > 12) throw "Month value is Invalid , Please Enter a value in range 1-12"
    if (newMonth == undefined || newYear == undefined) throw "No input found"
    if (isNaN(newMonth) || isNaN(newYear)) throw "No input or String found , Please Enter a value in range 1-12";
    if (newMonth % 1 != 0 || newYear % 1 != 0) throw "Number required , Floating value found"
    /*
    * check for leap year
    */
    if (newMonth == 2 && calendar.isLeapYear(newYear)) days[newMonth] = 29;
    console.log("   " + months[newMonth] + " " + year);
    console.log(" S  M Tu  W Th  F  S");
    /*
    * starting day
    */
    var day = calendar.day(newMonth, 1, newYear);
    /*
    * print the calendar
    */
    for (let i = 0; i < day; i++) {
        console.log("   ");
    }
    for (var i = 1; i <= days[newMonth]; i++) {
        console.log(" ", i);
        if (i < 10){
            console.log(" ");
        }
        if (((i + day) % 7 == 0) || (i == days[newMonth])) {
            console.log(" ");
        }
    }
} catch (err) {
    console.log("Error: " + err);
}