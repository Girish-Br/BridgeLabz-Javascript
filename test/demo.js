//import promise
var promise=require('promise');
//writing function
function add (x, y) {
    console.log("value of x: " + x + " and value of y: " + y);
    return new promise((resolve, reject) => {
        if (x < 0) {
            reject("x should be greater then 0")
        } else {
            resolve(x + y)
        }
    })
 }
 //export function()
 exports.add = add;