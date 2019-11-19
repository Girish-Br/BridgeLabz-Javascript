var primeAnaQueue=require('../utility/dataStructuresProgramsUtility');
var primeAna=require('../utility/dataStructuresProgramsUtility');
var queueLink = new primeAnaQueue.QueuedLinkedList;
var primes = [[],[],[],[],[],[],[],[],[],[]];
var initial = 0;
var final = 100;
for(let i = 0 ; i < primes.length ; i++){
    queueLink.enque(primes[i]);
}
for(let i=0 ; i < 10 ; i++){
    primes[i] = primeAna.findPrime(initial,final);
    initial = initial + 100;
    final = final + 100;
}
var start = 0;
var end = 100;
for(let i=0 ; i<10 ; i++){
    console.log(start+"-"+end + " ---> " + primes[i]  );
    start = start + 100;
    end = end + 100;
    console.log();
}