/***************************************** 
* @Purpose : To return all permutations of a String using iterative method and Recursion method
* @File    : stringPermutation.js
* @Author  : Girish B R
* @Date    : 30-10-2019
******************************************/
//to make user interact with script code via console
var readline = require("readline-sync");
//take input
var str = readline.question("enter string:");
//call function
function getAllPermutations(str) {
  //store results in this
  var results = [];
  if (str.length === 1) {
    results.push(str);
    console.log("results of if:" + results);
    return results;
  }
  for (var i = 0; i < str.length; i++) {
    var firstChar = str[i];
    console.log("firstchar:" + firstChar);
    console.log("i:" + i);
    var charsLeft = str.substring(0, i) + str.substring(i + 1);
    console.log("charsleft :" + charsLeft)
    var innerPermutations = getAllPermutations(charsLeft);
    console.log("inner: " + innerPermutations)
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
      console.log("results for :" + results);

    }
  }
  return results;
}
var result = getAllPermutations(str);
console.log(result);
/* function getAllPermutations (string)
  define results
  if string is a single character
    add the character to results
    return results
  for each char in string
    define innerPermutations as a char of string
    set innerPermutations to getAllPermutations (without next char)
    foreach string in innerPermutations
      add defined char and innerPermutations char
  return results */
