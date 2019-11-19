let util=require('../utility/algorithmProgramUtility');
//function to get prime numbers
var arr=generatePrimeNumbers();
console.log(arr);
function generatePrimeNumbers(){
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
