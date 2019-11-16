/*************************************************************************************************
*  @Purpose        : To create a proper address book to store new address informations           
*  @file           : addressBook.js
*  @overview       : Add new entries each time and manage that address book and perform opeartions
                    like add,delete,search,update and sort information.
*  @author         : GIRISH B R
*  @since          : 11-11-2019
***************************************************************************************************/
let readline=require('readline-sync');
//importing prompt sync
let prompt = require('prompt-sync')();
//built in library of filestream
let fs=require('fs');
//importing file
const data = fs.readFileSync('./addressbook.json');
//import business logic
let data1=require('./addressBookBLogic');
//converts string type to object type
var jsonData = JSON.parse(data);
//regex usage1
nameRestriction = /[a-z]/ig;
contactRestriction = /[0-9]/g;
/**
 * Add new entries each time and manage that address book and perform opeartions like add,delete,
 * search,update and sort information.
 * @param person store the info of each person and perform operations.
 */
// creating a function to perform main opeartions such as create,open profile
function addressBook() {
    const a =new data1(jsonData);
    var Menu=`*****ADDRESS BOOK****
    1:Create Profile
    2:Open Address Book
    3:Exit`
    console.log(Menu);
   let choice1 = prompt(`Please enter your choice: `);
    switch (parseInt(choice1)) {
        case 1:
           var res= a.createAddress();
            break;
        case 2:
            a.openProfile();
            break;
        case 3:
            console.log(`ThankYou!`);
            break;
        default:
            console.log(`Please enter a valid option!!`);
    }
    return res;
}
//call function
addressBook();