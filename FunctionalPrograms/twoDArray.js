//to make user interact with script code via console
var readline = require("readline-sync");
//take number of rows
var row = readline.question("Enter number of rows");
//take number of columns
var column = readline.question("Enter number of columns");
//create array of 1 dimensional
var integerArray = new Array(row);
var doubleArray = new Array(row);
var booleanArray = new Array(row);
//to create two dimensional array
for (let i = 0; i < row; i++) {
    integerArray[i] = new Array(column);
    doubleArray[i] = new Array(column);
    booleanArray[i] = new Array(column);
}
//calling methods to input the value to array
integerArray = arrayInt(row, column);
doubleArray = arrayDouble(row, column);
booleanArray = arrayBoolean(row, column);
//calling display method
display(integerArray, doubleArray, booleanArray, row, column);
// Method will take integer input from user and return the array to main 
function arrayInt(row, column) {
    console.log("Enter the value to Integer Array");
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            integerArray[i][j] = readline.question("Enter the array " + i + " " + j + " value");
        }
    }
    return integerArray;
}
// Method will take double input from user and return the array to main method
function arrayDouble(row, column) {
    console.log("Enter the value to Double Array");
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            doubleArray[i][j] = readline.question("Enter the array " + i + " " + j + " value");
        }
    }
    return doubleArray;
}
// Method will take boolean input from user and return the array to main method
function arrayBoolean(row, column) {
    console.log("Enter the value to Boolean Array")
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            booleanArray[i][j] = readline.question("Enter the array " + i + " " + j + " value");
        }
    }
    return booleanArray;
}
//display method
function display(integerArray, doubleArray, booleanArray, row, column) {
    //display integers array
    console.log("2D ARRAY INTEGER");
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            console.log(" "+integerArray[i][j]+" ");
        }
        console.log(" ");
    }
    //display double array
    console.log("2D ARRAY DOUBLE");
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            console.log(doubleArray[i][j]);
        }
    }
    //display boolean array
    console.log("2D ARRAY BOOLEAN");
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            console.log(booleanArray[i][j]);
        }
    }
}