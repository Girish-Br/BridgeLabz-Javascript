/************************************* 
* @Purpose : to display prime numbers in 2D array
* @File   : prime2DArray.js
* @Author : Girish B R
* @Date   : 6-11-2019
*************************************/
var primeValues=require('../../utility/dataStructuresProgramsUtility');
var primes = new Array(10);
var initial = 0;
var final = 100;
console.log('Prime Numbers in the given range are :');
//This condition calculates the initial to final value range
for(let index=0 ; index < 10 ; index++){
    primes[index] = primeValues.generatePrimeNumbers(initial,final);
   initial = initial + 100;
    final= final + 100;
}
var start = 0;
var end = 100;
// This condition checks the prime number range from starting to ending values 
for(let index1=0 ; index1<10 ; index1++){
    console.log("[" + "[" +start+ "-" +end+ "]" + " " + "[" + primes[index1] + "]" + "]");
    start = start + 100;
    end = end + 100;
    console.log();
}