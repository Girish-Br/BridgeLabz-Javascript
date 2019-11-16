/*************************************************************************************************
*  @Purpose        : To create a proper business logic for stock report code          
*  @file           : stockReportBlogic.js
*  @author         : GIRISH B R
*  @since          : 14-11-2019
***************************************************************************************************/
//import filestream
const fs = require('fs');
//export Inventory class
module.exports = class Inventory {
    //initialize constructor
    constructor() {
        this.content = null;
        this.fileName = null;
    }
    //parse the json files 
    jsonParse(fileName) {
        this.fileName = fileName;
        this.content = JSON.parse(fs.readFileSync(fileName));
    }
    //used to displaylay
    display() {
        this.content.Stock.forEach(element => {
            console.log(element);
        });
    }
    /*
     * @description : value
     * @purpose:   it calculate value of inventory
     * @param {data}, which has data information. 
     */
    totalValue() {
        var sum = 0;
        this.content.Stock.forEach(element => {
            sum = sum + element.price * element.numberOfShare
        });
        this.content.Stock.forEach(element => {
            console.log(`${element.stockName} is rs ${element.price * element.numberOfShare}`);
        });
        console.log(`Total value of stocks : ${ sum } Rs`);
        return this.totalValue;
    }
}