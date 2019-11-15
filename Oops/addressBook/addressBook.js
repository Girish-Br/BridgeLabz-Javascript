/*************************************************************************************************
*  @Purpose        : To create a proper address book to store new address informations           
*  @file           : addressBook.js
*  @overview       : Add new entries each time and manage that address book and perform opeartions
                    like add,delete,search,update and sort information.
*  @author         : GIRISH B R
*  @since          : 11-11-2019
***************************************************************************************************/
//importing prompt sync
const prompt = require('prompt-sync')();
//built in library of filestream
const fs = require('fs');
//importing file
const data = fs.readFileSync('./addressbook.json');
const data1=require('./addressBookBLogic')
//converts string type to object type
var address = JSON.parse(data);
//regex usage1
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;
/**
 * Add new entries each time and manage that address book and perform opeartions like add,delete,
 * search,update and sort information.
 * @param person store the info of each person and perform opeartions.
 */
// creating a function to perform main opeartions such as create,open profile
function addressBook() {
    const a =new data1(address);
    console.log("*****ADDRESS BOOK*****");
    console.log("1:Create Profile");
    console.log("2:Open Address Book");
    console.log("3:Exit");
   let choice1 = prompt("Please enter your choice: ");
    switch (parseInt(choice1)) {
        case 1:
            a.createAddress();
            break;
        case 2:
            a.openProfile();
            break;
        case 3:
            console.log("ThankYou!");
            break;
        default:
            console.log("Please enter a valid option!!");
    }
}
addressBook();