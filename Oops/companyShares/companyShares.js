//import filestream
const fs = require('fs');
//import linkedlist file
const linkedList = require('./linkedList');
//import prompt-sync
const prompt = require('prompt-sync')();
//instantiating linkedlist
var list = new linkedList();
//import json file
var data = fs.readFileSync('./company.json')
//converting data to obj type
var companySharesJson = JSON.parse(data);
function sharesManage() {
    const menu = `1. Add new Company
    2. Remove Company
    3. Display
    4. Exit`;
    //loop to add items to linkedlist
    companySharesJson.forEach(element => {
        list.firstAdd(element.name, Number(element.share), Number(element.price));
    });
    while (1) {
        console.log(menu);
        var choice = prompt("Enter one option :")
        //case 1 for adding item
        switch (parseInt(choice)) {
            case 1:
                var company = prompt("Enter the new company name: ");
                var numberOfshares = prompt("Enter the Number of shares: ");
                var sharePrice = prompt("Enter the share price: ");
                //adding the item
                list.firstAdd(company, Number(numberOfshares), Number(sharePrice));
                companySharesJson = list.getData();
                //writing data to file
                fs.writeFileSync('./company.json', JSON.stringify(companySharesJson));
                console.log(companySharesJson);
                break;
                //case 2 for deleting item
            case 2:
                console.log(companySharesJson);
                var deleteCompnay = prompt("Enter the company you want to delete : ");
                var flag = list.delete(deleteCompnay);
                if (flag == true) {
                    console.log("Deleted")
                    companySharesJson = list.getData();
                    fs.writeFileSync('./company.json', JSON.stringify(companySharesJson));
                } else {
                    console.log("Not found")
                }
                break;
                //case3 to display
            case 3:
                companySharesJson = list.getData();
                console.log(companySharesJson);
                break;
                //last case to exit
            case 4: process.exit();
                break;
        }
    }
}
//call function
sharesManage();