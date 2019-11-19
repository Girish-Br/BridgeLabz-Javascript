function hashing() {
    /*
    * it will access or read the file
    */
    var file = filestream.readFileSync('hashing.txt', 'utf8');
    var num = file.split(' ');
    var arr = new Array(10); 
    var remainder, n;

    for (let i = 0; i < num.length; i++) {
        n = Number(num[i]);
        remainder = n % 10;
        /*
        * this condition will calculate the value and returns remainder
        */
        if (arr[remainder] === undefined) {
            arr[remainder] = new utility.LinkedList;
            arr[remainder].add(n);
        } else {
            arr[remainder].add(n);
        }
    }
    var str = "";
    /*
    * this condition will stores the elements in index
    */
    for (let index = 0; index < 10; index++) {
        take.print(index + " elements    ");
        try {
            arr[index].show();

        } catch (err) {
            console.log("empty index");
        }
    }
    var number = readline.question(' Enter the number you want to search \n');
    if (!isNaN(number)) {
        /*
        * this condition will calculate the value, returns remainder and stores in file
          through linkedlist
        */
        remainder = Number(number % 10);
        console.log(remainder);
        console.log(arr[1]);
        if (arr[remainder] === undefined) {
            arr[remainder] = new utility.LinkedList;
        }
        /*
        * this condition will checks the number , if number found in the file it will removed 
        */
        if (arr[remainder].search(Number(number))) {
            console.log("The number is found in file");
            arr[remainder].remove(number);
        } 
        /*
        * this condition will checks the number , if number not found in the file it will added 
        */
        else {
            console.log("Number is not found in file");
            arr[remainder].add(number);
        }
        var flag;
        for (let index = 0; index < 10; index++) {
            flag = true;
            /*
            * it will prints the items and stores into file
            */
            take.print(index + " result elements ,   ");
            try {
                arr[index].show();
                str = str + arr[index].getData();
                if (arr[index] !== 'undefined' && index < arr.length - 2) {
                    str = str + " ";
                }
            } catch (err) {
                console.log("Empty index");
            }
        } console.log(str);
        /*
        * it will access the file
        */
        access.writeFile('hash.txt', str);
        console.log("\n\n");
    } else {
        console.log("Wrong input ");
    }
}
hashing();