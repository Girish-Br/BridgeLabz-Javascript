var primeAnagram=require('../../utility/dataStructuresProgramsUtility');
var anagramPrimes = [[],[],[],[],[],[],[],[],[],[]];
var initial = 0;
var final = 100;
// This condition calculates the initial to final value range
for(let index=0 ; index < 10; index++){
    anagramPrimes[index] = primeAnagram.findAnaPrime(initial,final);
    initial = initial + 100;
    final = final + 100;
}
var start = 0;
var end = 100;
console.log("---Range of Prime numbers which are Anagrams---");
console.log("");
/*
* This condition checks the Prime & Anagram number range from starting to ending values 
*/
for(let index1=0 ; index1<10 ; index1++){
    console.log("[" +"[" +start+"-"+end+ "]" +" "+ "[" + anagramPrimes[index1]+ "]"+"]" );
    start = start + 100;
    end = end + 100;
    console.log("\n");
}

