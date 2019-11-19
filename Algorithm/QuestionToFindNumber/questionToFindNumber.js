let util=require('../utility/algorithmProgramUtility');
//to make user interact via console
var readline = require("readline-sync");
//take range
var range = readline.question("Enter the range of number");
//calculating number of chance
var chance = Number(Math.ceil(Math.sqrt(range)));
//call function to find number
findNumber(chance, range);
function findNumber(chance, range) {
    //creating array of the numbers within range
    var numbers = new Array(range);
    for (let i = 0; i < range; i++) {
        numbers[i] = i + 1;
    }
    console.log("Think a number between " + numbers[0] + " to " + (range));
    //call function to find a number
    binarySearch(numbers, 0, range - 1);
}
function binarySearch(numbers, low, max) {
    var flag = true;
    while (chance > 0 && low <= max) {
        var mid = parseInt((low + max) / 2);
        if (flag) {
            //checks the number
            var choice = readline.question("Choose\n1>:Please press 1 if your number is equal to " + numbers[mid] + "\n 2> : Please press 2 if your number is greater than " + numbers[mid]
                + "\n3> : Please press 3 if your number is less than " + numbers[mid] + "\n\n");
            //switch case for further process
            switch (parseInt(choice)) {
                case 1:
                    console.log("\nCongratulation!!! Your number is :" + numbers[mid]);
                    flag = false;
                    break;
                case 2:
                    low = mid + 1;
                    binarySearch(numbers, low, max);
                    Chance--;
                    break;
                case 3:
                    max = mid - 1;
                    binarySearch(numbers, low, max);
                    Chance--;
                    break;
            }
        }
    }
}