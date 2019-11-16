/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.     
 *  @file           : dataManagement.js
 *  @overview       : Create a JSON file having Inventory Details for Rice, Pulses and Wheats 
                      with properties name, weight, price per kg.Then read Json file and calculate 
                      value of each inventory. 
 *  @author         : GIRISH B R
 *  @since          : 12-11-2019
 ***************************************************************************************************/
//to import grocery file
const util=require('./grocery');
//to import filestream
const fs=require('fs');
//to read json file
const content=fs.readFileSync('dataManagement.json','utf-8')
console.log(content);
//converting to obj
const obj=JSON.parse(content);
console.log("resultant of rice ");
//assigning length of rice
let length=obj.Rice.length;
//loop to iterate through length of rice
for(let i=0;i<length;i++){
    let name=obj.Rice[i].name;
    let weight=obj.Rice[i].weight;
    let price=obj.Rice[i].price;
    let company=new util(name,weight,price);
    let total=company.total();
    //printing data and its total price
    console.log("Name:"+name+" "+"weight:" +weight+"price:"+price);
    console.log("total price of rice is:"+total);
}
console.log("resultant of Pulses: ");
let length1=obj.Pulses.length;
for(let i=0;i<length1;i++){
    let name=obj.Pulses[i].name;
    let weight=obj.Pulses[i].weight;
    let price=obj.Pulses[i].price;
    let company=new util(name,weight,price);
    let total1=company.total();
    //printing data and its total price
    console.log("Name:"+name+"weight:"+weight+"price:"+price);
    console.log("total price of rice is:"+total1)
}