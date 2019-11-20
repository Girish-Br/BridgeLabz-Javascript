/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.      
 *  @file           : commercialDataProcessing.js
 *  @author         : GIRISH B R 
 *  @since          : 13-11-2019
 ****************************************************************************************************/
//import filestream
let fs=require('fs');
 //node-module prompt-sync
const prompt = require('prompt-sync')();
//read file from json
let data = fs.readFileSync('./commercialData.json');
//function JSON.parse() is used to convert the string into a JavaScript Objects
let arrayOfObjects = JSON.parse(data);
// creating a stockAccount node to create any new node with null values.
class stockAccount {
    constructor(stockname, numberofshare, shareprice) {
        //creating an object for stockname,numberofshare & shareprice 
        this.stockname = stockname;
        this.numberofshare = numberofshare;
        this.shareprice = shareprice;
    }
    // to buy shares
    buy() {
        try {
            // add shares of stock to account 
            var stock = prompt('enter number of stocks: ');
            if (isNaN(stock)) throw "invalid input"
        } catch (err) {
            console.log(err);
        }
        for (let i = 1; i <= stock; i++) {
            try {
                let name = prompt('enter the name: ');
                if (!isNaN(name)) throw "invalid input"
                let number = prompt('enter the number of share: ');
                if (isNaN(number)) throw "invalid input"
                let price = prompt('enter the price: ');
                if (isNaN(price)) throw "invalid input"
                arrayOfObjects.push({
                    "name": name,
                    "number_of_share": number,
                    "price": price
                })
                console.log(arrayOfObjects);
            } catch (err) {
                console.log(err);
            }
            writeFileSync('./commercialData.json', JSON.stringify(arrayOfObjects), 'utf-8')
        }
    }
    //logic for selling
    sell() {
        // subtract shares of stock from account 
        let i = prompt('which index u want to sell ? : ');
        //deleting the element 
        arrayOfObjects.splice(i,1);
        console.log(arrayOfObjects);
        writeFileSync('./commercialData.json', JSON.stringify(arrayOfObjects), 'utf-8')
    }
    // to save data to file
    save() {
        //save account to file 
        let res = JSON.stringify(arrayOfObjects)
        writeFileSync('./commercialData.json', JSON.stringify(res), 'utf-8')
    }
    // to display the data 
    printReport() {
        //print a detailed report of stock & values 
        let sum = 0;
        console.log(arrayOfObjects.length);
        for (let i = 0; i < arrayOfObjects.length; i++) {
            //console.log(i);
            let num = parseInt(arrayOfObjects[i].number_of_share * arrayOfObjects[i].price);
            console.log(`the total price of each stock is:  ${num}`);
            sum = parseInt(sum + num);
        }
        console.log(`the total price of stock is:  ${sum}`);
    }
}
let obj = new stockAccount();
while (1) {
    console.log('1.Buy the  Stocks');
    console.log('2.Sell the Stocks');//print all the choices to user 
    console.log('3.Print the Stock Report');
    console.log('4.save the file');
    console.log('5.Exit');
    let choice = prompt('choose an option to perform desired operation :');
    switch (choice) {
        //switch case implementation to perform the required operation 
        case '1': obj.buy()
            break;
        case '2': obj.sell()
            function filterByID(item) {
                console.log(item.name);
                if (item.name !== undefined) {
                    return true;
                }
                count++;
                return false;
            }
            arrayOfObjects = arrayOfObjects.filter(filterByID);
            console.log('Filtered Array\n', arrayOfObjects);
            break;
        case '3': obj.printReport();
            break;
        case '4': obj.save();
            break;
        case '5': process.exit();
        default: console.log('No Such Option ')
            break;
    }
}