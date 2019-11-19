  /***********************************************
* @Purpose :to implement prime numbers that are anagrams in stack.
* @File    :PrimeAnaStack.js
* @Author  :Girish B R
* @Date    :08-11-2019
************************************************/
var primeAnaStack=require('../../utility/dataStructuresProgramsUtility');
var primeAna=require('../../utility/dataStructuresProgramsUtility');
function printAnaprimes()
{
    var stackLink = new primeAnaStack.StackedLink;
    var anaPrimes = [[]];
    anaPrimes = primeAna.findAnaPrime(0,1000);
    for(let i = 0 ; i < anaPrimes.length ; i++){
        stackLink.push(anaPrimes[i]);
    }
    console.log();
    console.log("------Initial LinkList------");
    stackLink.display();
    var top =  stackLink.getHead();
    //console.log(top);
    console.log();
    console.log("------Reversed LinkList------");
    stackLink.displayReverse(top);
    //console.log(stackLink.peek());
}
printAnaprimes();