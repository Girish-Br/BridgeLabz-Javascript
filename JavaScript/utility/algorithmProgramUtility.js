/*####################################################################################################
####################################################################################################*/
exports.anagram = (s1, s2) => {
    //checks both char array have same length or not
    if (s1.length != s2.length) {
        console.log("not an anagram");
    }
    else {
        //compares both strings
        var s3 = s1.split('').sort();
        console.log(s3);
        var s4 = s2.split('').sort();
        console.log(s4);
        if (s3 = s4) {
            console.log(s1 = s2);
            console.log("it is an anagram");
        }
        else {
            console.log("not an anagram");
        }
    }
}
/*####################################################################################################
####################################################################################################*/
exports.bubbleSort = (array) => {
    var length = array.length;
    //run loop till length
    for (let i = 0; i < length; i++) {
        //run loop till i
        for (let j = 0; j < (length - 1 - i); j++) {
            //Compare the adjacent positions
            if (array[j] > array[j + 1]) {
                //Swap the numbers
                var temp = array[j]; //Temporary variable to hold the current number
                array[j] = array[j + 1]; //Replace current number with adjacent number
                array[j + 1] = temp; //Replace adjacent number with current number
            }
        }
    }
    return array;
}
/*####################################################################################################
####################################################################################################*/
exports.binarySearch = (stringArray, searchWord) => {
    stringArray = stringArray.sort();
    console.log("Sorted array");
    console.log(stringArray)
    //initialize lower and higher index
    var low = 0, high = stringArray.length - 1;
    var mid = Math.floor((high + low) / 2);
    //run loop till lower index is lesser than or equal to higher index
    while (low <= high && stringArray[mid] != searchWord) {
        //adjust search area of array
        if (searchWord < stringArray[mid]) {
            high = mid - 1;
        } else if (searchWord > stringArray[mid]) {
            low = mid + 1;
        }
        //recalculate middle
        mid = Math.floor((high + low) / 2);
    }
    //return -1 if word is not present else mid value
    return (stringArray[mid] != searchWord) ? -1 : mid + 1;
}
/*####################################################################################################
####################################################################################################*/
exports.insertionSort = (unsortedList) => {
    console.log("in insertion sort");
    var len = unsortedList.length;
    for (let i = 1; i < len; i++) {
        var temp = unsortedList[i]; //Copy of the current element. 
        /*Check through the sorted part and compare with the string in temp. If large, shift the string*/
        for (var j = i - 1; j >= 0 && (unsortedList[j].localeCompare(temp) > 0); j--) {
            //Shift the string
            unsortedList[j + 1] = unsortedList[j];
        }
        //Insert the copied string at the correct position
        //in sorted part. 
        unsortedList[j + 1] = temp;
    }
}
/*####################################################################################################
####################################################################################################*/
exports.generatePrimeNumbers = (initial, limit) => {
    var primeNumbers = new Array();
    for (let i = initial; i <= limit; i++) {
        if (i < 2)
            continue;
        var flag = true;
        //this loop iterate till i/2
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = false; //not a prime
            }
        }
        //if true then number is prime
        if (flag == true) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}
/*####################################################################################################
####################################################################################################*/
module.exports={ generatePrimeNumber(i,f) {
    var primeArray = new Array();
    for (let i = 0; i <= 1000; i++) {
        if (i < 2) continue;
        var flag = 1;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = 0;
            }
        }
        if (flag == 1) {
            primeArray.push(i);
        }
    }
    return primeArray;
}
}
/*####################################################################################################
####################################################################################################*/
module.exports = {
    writeFile(fileName, data) {
        const fs = require('fs');
        /*
        * it is used to access the file
        */
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                return console.log(err);
            }
        });
    }
}
