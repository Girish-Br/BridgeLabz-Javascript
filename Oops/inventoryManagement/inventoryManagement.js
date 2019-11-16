/*************************************************************************************************
 *  @Purpose        : To create the JSON from Inventory Object and output the JSON String.     
 *  @file           : inventoryManagement.js
 *  @overview       : Here we extend dataManagement program to maintain the contents of it by adding
 *                    deleting,displaying.
 *  @author         : GIRISH B R 
 *  @since          : 12-11-2019
 ***************************************************************************************************/
//importing filestream
 let fs = require('fs');
 let inventory=require("./inventoryManagementBLogic");
// using prompt-sync asking user to enter the input
let prompt = require('prompt-sync')();
//reading data from a json file
let data = fs.readFileSync('./inventoryManagement.json');
//printing data from json file
console.log("Data in a json file is\n" + data);
//for holding the object
let inventoryJson = JSON.parse(data);
console.log(" ");
var flag=true;
var nameRestriction = /[a-z]/ig;
function inventoryManage() {
    while(flag){
    console.log(" ");
    console.log("Inventory Management");//menu
    console.log(" 1: Insert\n 2: delete Item \n 3: Edit \n 4: Display \n 5: Exit");
    //asking user to enter the choice
    var choice = prompt("Please enter your choice: ");
    switch (parseInt(choice)) {
        case 1:
             // Insert Operation
            var num = prompt("Enter Total item you want to add stock->");
            if (isNaN(num)) throw "invalid input"
            for (let j = 0; j < num; j++) {
                var Name = prompt("Please enter the item name you want to add: ");
                if (nameRestriction.test(Name)==false) throw "invalid name input"
                var weight = prompt("Please enter the total number of Kgs: ");
                if (isNaN(weight)) throw "invalid input"
                var price = prompt("Please enter the price per Kg.: ");
                if (isNaN(price) && price<0) throw "invalid input"
                inventoryJson.push({
                        "name": Name,
                        "weight": parseInt(weight),
                        "price": parseInt(price)
                })
            }
            console.log(inventoryJson);
            inventory.writeToFile(inventoryJson);
            break;
        case 2:
            /**
            * delete Operation
            * asking user to enter product name
            */
            var deleteItem = prompt("Please enter the name of item you want to delete from the inventory: ");
            if (nameRestriction.test(deleteItem)==false) throw "invalid name input"
            // delete item from the json file
            index=-1;
            for (let i = 0; i < inventoryJson.length; i++) {
                if (deleteItem == inventoryJson[i].name) {
                    index = i; // item index
                }
            }
            if(index!=-1)
            {
                inventoryJson.splice(index, 1);  //delete the item from array
                console.log("after deletion data is");
                //Print the array
                inventoryJson.forEach(element => {
                console.log(element);
                });
                inventory.writeToFile(inventoryJson); //update the json file
            }
            else {
                console.log("Entered Item not found")
            }
             break;
            case 3:
                    inventory.show(); //reading json file and print it
                    var updateItem = prompt("Please enter the name of item you want to Edit from the inventory: ");
                    if (nameRestriction.test(updateItem)==false) throw "invalid name input"
                    var index=-1;
                    for (let k = 0; k < inventoryJson.length; k++) {
                        if (updateItem == inventoryJson[k].name) {
                            index = k; //item index
                        }
                    }
                    if(index!=-1)
                    {
                        var weight = prompt("Please enter the total number of Kgs: ");
                        if (isNaN(weight)) throw "invalid input"
                        var price = prompt("Please enter the price per Kg.: ");
                        if (isNaN(price) && price<0) throw "invalid input"  
                        inventoryJson[index].weight=parseInt(weight); //update weight
                        inventoryJson[index].price=parseInt(price);   //update price
                        inventory.writeToFile(inventoryJson); //write in file with updated data
                    }
                    else {
                        console.log("Entered Item not found")
                    }

                break;
            case 4:
                inventory.show();     //reading json file and print it
                break;
            case 5:
                flag=false;
                process.exit();

            default:
                console.log("Invalid choice");
}
}
}
// calling function
inventoryManage();
