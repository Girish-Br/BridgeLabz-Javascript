/*####################################################################################################
####################################################################################################*/
exports.leapYear = (year) => {
    if ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
/*####################################################################################################
####################################################################################################*/
exports.WindChill = (t, v) => {
    //calculate w if t and v values are as given condition
    var w = 35.74 + 0.6215 * t + (0.4275 * t + 35.75) * Math.pow(v, 0.16);
    return w;
}
/*####################################################################################################
####################################################################################################*/
exports.Distance = (x, y) => {
    var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    return distance;
}
/*####################################################################################################
####################################################################################################*/
exports.getGeneratedCoupon = (n) => {
    //initialize count and randomcount
    var count = 0, randomCount = 0;
    //declare flag var
    var flag = true;
    //create array of distinctcoupons
    var distinctCoupans = new Array();
    var coupanLength = 5;
    while (count < n) {
        var alphaNumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        var coupan = '';
        for (let i = 0; i < coupanLength; i++) {
            var length = alphaNumeric.length;
            coupan = coupan + (alphaNumeric.charAt((Math.floor(Math.random() * length) + 1))); //each time calling the random function and alphanumeric will appended to the string
            //console.log((Math.random() * length)+1);
            randomCount++; //increment the randomcount for to count how many times random number generated
        }
        for (let i = 0; i < count; i++) {
            if (distinctCoupans[i] == coupan.toString()) //check the coupon distinct or not
            {
                flag = false;
            }
        }
        if (flag == true) {
            distinctCoupans.push(coupan.toString()); //distict coupan will added to the list
            count++;
        }
        flag = true;
    }
    console.log("Total Random number needed to have all distinct coupan number: " + randomCount); //prints the total number random used
    return distinctCoupans;
}
/*####################################################################################################
####################################################################################################*/
exports.factorsOfNumber = (n) => {
    //run loop 
    for (let i = 0; i <= n; i++) {
        //checks if number is divisible by i or not
        if (n % i == 0) {
            //prints if number is divisible by i
            console.log("factors of" + n + "is" + i);
        }
    }
}
/*####################################################################################################
####################################################################################################*/
exports.flipCoin = (n) => {
    //initialize headcount and tailcount
    var headscount = 0;
    var tailscount = 0;
    //checks number of tries is greater than 0
    if (n > 0) {
        //run loop from 0th count to nth count
        for (let i = 0; i <= n; i++) {
            //generates random number
            var r = Math.random();
            //to know what number it is generated
            console.log(r);
            //if random number generated is less than 0.5 increment tailscount
            if (r < 0.5) {
                tailscount += 1;
            }
            //else increment headscount
            else {
                headscount += 1;
            }
        }
        console.log("heads flip percentage=" + ((headscount / n) * 100) + "%");
        console.log("tails flip percentage=" + (((n - headscount) / n) * 100) + "%");
    }
}
/*####################################################################################################
####################################################################################################*/
exports.PowerOfTwo = (num) => {
    if (num < 31 && num >= 0) {
        //run loop from 0 and n
        for (let i = 0; i <= num; i++) {
            //calculates 2 to the power of i
            const pow = Math.pow(2, i)
            console.log("2 power of" + i + "=" + pow);
        }
    }
    //print if the input is not in range 0 and 32
    else {
        console.log("enter values between o and 32");
    }
}
/*####################################################################################################
####################################################################################################*/
exports.Quadratic = (a, b, c) => {
    var root1 = 0;
    var root2 = 0;
    var delta = ((b * b) - (4 * a * c));
    //if delta is positive
    if (delta > 0) {
        root1 = ((-b + Math.sqrt(delta)) / (2 * a));
        root2 = ((-b - Math.sqrt(delta)) / (2 * a));
        console.log(root1);
        console.log(root2);
    }
    //if delta is equal to 0
    else if (delta == 0) {
        root1 = root2 = -b / (2 * a);
        console.log(root1);
        console.log(root2);
    }
    //if delta is negative
    else {
        root1 = -b / (2 * a);
        root2 = Math.sqrt((-delta) / (2 * a));
        console.log(root1);
        console.log(root2);
    }
}
/*####################################################################################################
####################################################################################################*/
exports.DistinctTriplets = (arr, size) => {
    var count = 0;
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            for (let k = j + 1; k <= arr.length; k++) {
                //checks sum of three nummbers are zero or not
                if (Number(arr[i]) + Number(arr[j]) + Number(arr[k]) == 0) {
                    //displays those 3 numbers
                    console.log(arr[i] + " " + arr[j] + " " + arr[k]);
                    //increment count
                    count++;
                }
            }
        }

    }
    return count;
}
/*####################################################################################################
####################################################################################################*/
exports.Gambler = ($stake, $goal, n) => {
    //initialize bets and wins to zero
    var bets = 0, wins = 0;
    //run loop from 1 to n tries
    for (let i = 1; i <= n; i++) {
        //assign stake value to cash
        var cash = $stake;
        //while player have the cash run the loop
        while (cash > 0 && cash < $goal) {
            bets++;
            if (Math.random() < 0.5) {
                //won the game and cash increases
                cash++;
                if (cash == $goal)
                    wins++;
            }
            else {
                //loses the game and casg decreases
                cash--;
            }
            //if the player have the cash equal to goal ,he won
        }
    }
    console.log(wins + " wins of " + n);
    console.log("Percent of games won = " + 100.0 * wins / n + " %");
    console.log("Avg # bets = " + bets / n);

}