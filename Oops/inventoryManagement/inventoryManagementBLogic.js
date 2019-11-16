//import fs
let fs=require('fs');
exports.writeToFile=(inventoryJson)=>{
{
    //writing inventoryJson on json file
    fs.writeFileSync('inventoryManagement.json', JSON.stringify(inventoryJson), 'utf-8', function (err) {
    if (err) throw err
    console.log('Successfully Done!');
    })
}
}
//reading json file and print it
exports.show=()=>{{
    var data = fs.readFileSync('inventoryManagement.json', 'utf-8');
    console.log("All items in inventory is\n" + data);
    inventoryJson = JSON.parse(data);
    var price=totalPrice(inventoryJson);
    console.log("Total Stock Value : "+price+ "Rs");

}  
}
exports.totalPrice=(inventoryJson)=>{
{
    var stockTotalPrice=0;
    inventoryJson.forEach(element => {
        stockTotalPrice=stockTotalPrice+(element.weight*element.price);
        });
    return stockTotalPrice;
}
}