  /****************************************
* @Purpoase :  Find the prime numbers that are Anagram and Palindrome  
* @Author   : Girish B R
* @Date     : 02-11-2019
*****************************************/
let util=require('../../utility/algorithmProgramUtility');
//code to generate prime numbers
//function for generating palindromes that are prime
function generatePalindrome(primeArray) {
    for (let i = 0; i < primeArray.length; i++) {
        //checks the arr[i]=palindrome arr[i] or not
        if (primeArray[i] == palindrome(primeArray[i])) {
            //if condition satisfies push values to palindrome array
            palindromeArray.push(primeArray[i]);
        }
    }
    return palindromeArray;
}
//revreses number
function palindrome(n) {
    var r, reverseNumber = 0;
    while (n > 0) {
        reverseNumber = (parseInt(reverseNumber) * 10) + parseInt(n%10);
        n = parseInt(parseInt(n) / 10);
    }
    return reverseNumber;
}
//create new array
var primeArray = new Array();
//create new array
var palindromeArray = new Array();
//calling function()
primeArray = util.generatePrimeNumbers();
//calling function()
palindromeArray = generatePalindrome(primeArray);
console.log("Palindrome Prime Number are:");
console.log(palindromeArray);

