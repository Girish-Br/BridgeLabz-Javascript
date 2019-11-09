/*####################################################################################################
####################################################################################################*/
module.exports = {
    /*
    * It will used to find the Anagram numbers in Prime Numbers
    */
    findAnaPrime(ii, jj) {
        var primes = this.findPrime(ii, jj);
        var n = primes.length;
        var anaPrimes = [];
        var h = 0;
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n - 1; j++) {
                if (this.checkAnagram2(primes[i], primes[j])) {
                    anaPrimes[h++] = primes[i];
                    anaPrimes[h++] = primes[j];
                }
            }
        }
        return anaPrimes;
    },
    /**
    *  It will used to check the Anagram Numbers
    **/
    checkAnagram2(str1, str2) {
        let unsortedStr1 = "" + str1;
        let unsortedStr2 = "" + str2;
        if (unsortedStr1.length != unsortedStr2.length) {
            return false;
        }
        sortedStr1 = this.sort1(unsortedStr1);
        sortedStr2 = this.sort1(unsortedStr2);
        let b = this.check(sortedStr1, sortedStr2);
        if (b == true) {
            return true;
        }
        else {
            return false;
        }
    },
    /**
    *  It will used to find Prime Numbers
    **/
    findPrime(s1, s2) {
        var count = 0, flag = 0, k = 0;
        var prime = [];
        for (var i = s1; i <= s2; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 0;
                    count++;
                    break;
                }
                else {
                    flag = 1;
                }
            }
            if (flag == 1) {
                prime[k++] = i;
            }
        }
        return prime;
    },
    /**
    *  It will used to checks the item length
    **/
    check(s1, s2) {
        for (let i = 0; i < s1.length; i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                return false;
            }
        }
        return true;
    },
    /**
    *  It will used to sort the Items 
    **/
    sort1(str) {
        let ch = str.split('');
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                if (ch[i] > ch[j]) {
                    let t = ch[i];
                    ch[i] = ch[j];
                    ch[j] = t;
                }
            }
        }
        var sortedStr = "";
        for (let i = 0; i < ch.length; i++) {
            sortedStr += ch[i];
        }
        return sortedStr;
    }
}


/*********************************************************************************************************** */
/*********************************************************************************************************** */
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
/*********************************************************************************************************** */
/*********************************************************************************************************** */
module.exports = {
    orderedList(fileData, searchNumber) {
        //converting data to string by splitting
        var fileDataArray = fileData.toString().split(' ');
        //creating new array
        var numbersArray = new Array();
        for (let i = 0; i < fileDataArray.length; i++) {
            numbersArray.push(fileDataArray[i]);
        }
        // create a new object of Linkedlist class
        var list = new linkedList;
        //Before inserting linked list sort the array 
        numbersArray = numbersArray.sort(function (a, b) {
            return a - b;
        });
        console.log("Sorted array: " + numbersArray);
        //add all the numbers array element to the linked list
        for (let i = 0; i < numbersArray.length; i++) {
            list.add(numbersArray[i]);
        }
        list.dsiplay();
        if (list.search(searchNumber) == -1) {
            //adds the number
            list.add(searchNumber);
            console.log("Added successfully..\n");
        }
        // This condition checks for removing the item,if item already exists in file
        else {
            list.removeSearchNumber(searchNumber);
            console.log("Removed successfully....\n");
        }
        //write operation to save updated list into the file.
        var dataWrite = list.dsiplay();
        writeToFile("./file3.txt", dataWrite);
    }
}
//creating class for linkedlist
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(searchNumber) {
        //creating a new node
        var node = new Node(searchNumber);
        //if list is empty add an searchNumber and make it head. 
        if (this.head == null) {
            this.head = node;
        }
        else {
            // to store current node 
            var current = this.head;
            var previous, count = 0;
            while (current.next != null && count != 1) {
                if (current.data > searchNumber) {
                    console.log(current.data);
                    previous.next = node;
                    node.next = current;
                    count++;
                }
                else {
                    previous = current;
                    current = current.next;
                }
            }
            if (current.next == null) {
                current.next = node;
            }
        }
        this.size++;
    }
    //remove the string or searchNumber,if it already exists
    removeSearchNumber(searchNumber) {
        var current = this.head;
        var previous = null;
        while (current != null) {
            if (current.data == searchNumber) {
                if (previous == null) {         //if first element is the searchNumber
                    this.head = current.next;   // the saerchword will be removed and head will be the next element
                }
                /*it works when the search element is not at the first.
                *so the previous node store the reference of next node.
                */
                else {
                    previous.next = current.next;
                }
                this.size--;  //size decremented
                return current.searchNumber;
            }
            //if search word not found
            previous = current;
            current = current.next;
        }
        return -1;
    }
    dsiplay() {
        //print the given list after performing changes.
        var current = this.head;
        var string = "";
        while (current) {
            string += current.data + " ";
            current = current.next;
        }
        console.log("Ordered Linked list: " + string);
        return string;
    }
    search(searchNumber) {
        var count = 0;
        var current = this.head;
        while (current != null) {
            if (current.data == searchNumber) {
                return count; //if item found it will return 1
            }
            count++;
            current = current.next;
        }
        return -1; //item not found it will return -1
    }
}
function writeToFile(fileName, data) {
    const fs = require('fs');
    /*
    * it is used to access the file  system module
    *fs.writefile() write the data in specified file if does not found it will create the file
    */
    fs.writeFile(fileName, data, function (err) {     //this function write the data in file
        if (err) {
            return console.log(err); //error 
        }
    });
}
/********************************************************************************************************* */
/********************************************************************************************************* */
module.exports = {
    unorderedList(stringArray, searchWord) {
        // create a new object of Linkedlist class
        var list = new linkedList1;
        for (let i = 0; i < stringArray.length; i++) {
            list.add(stringArray[i]);
        }
        //This condition checks for adding the item,if item not exists in file,it adds
        if (list.search(searchWord) == -1) {
            list.add(searchWord);
            console.log("Added successfully..\n");
        }
        //This condition checks for removing the item,if item already exists in file
        else {
            list.removesearchWord(searchWord);
            console.log("Removed successfully....\n");
        }
        //write operation to save updated list into the file.
        var dataWrite = list.printList();
        console.log(dataWrite);
        writeFileSync("./file2.txt", dataWrite);
    }
}

/**
*  creating class linkedlist which will create new nodes and perform operation like 
*  add,remove,insertAt,insertFrom.
*/
class linkedList1 {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(searchWord) {
        //creating a new node
        var node = new Node(searchWord);
        //to store current node 
        var current;
        // if list is empty add an searchWord and make it head. 
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    //remove the string or searchWord,if it already exists
    removesearchWord(searchWord) {
        var current = this.head;
        var previous = null;
        while (current != null) {
            if (current.searchWord === searchWord) {
                if (previous == null) {
                    this.head = current.next;
                }
                else {
                    previous.next = current.next;
                }
                this.size--;
                return current.searchWord;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }
    search(searchWord) {
        var count = 0;
        var current = this.head;
        while (current != null) {
            if (current.searchWord === searchWord) {
                return count; //if item found it will return 1
            }
            count++;
            current = current.next;
        }
        return -1; //item not found it will return -1
    }
    printList() {
        //print the given list after performing changes.
        var current = this.head;
        var string = "";
        while (current) {
            string += current.searchWord + " ";
            current = current.next;
        }
        console.log(string);
        return string;
    }
}
function writeFileSync(fileName, data) {
    const fs = require('fs');
    //it is used to access the file
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/*****************************************************************************************************
*****************************************************************************************************/
//built in library for read  a file
const fs = require("fs");
class Queue {
    //create a new constructor to create object of item.
    constructor() {
        this.items = [];
    }
    //add elements into the queue.
    enQueue(element) {
        //pushes elem to last
        return this.items.push(element);
    }
    // remove elements from the queue
    deQueue() {
        //if there is no element in queue and we perform deQueue then it get underflow.
        if (this.isEmpty())
            return "underflow";
        //removes first elem
        return this.items.shift();
    }
    front() {
        // it will return front element of queue without removing it.
        if (this.isEmpty())
            return "No elements in the queue";
        return this.items[0];
    }
    //checks if queue is empty are not
    isEmpty() {
        return this.items.length == 0;
    }
    // returns the length of queue
    length() {
        return this.items.length;
    }
    printQueue() {
        // print queue
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}


//exports if a object that get exposed to a module and it is by default in every js file.
module.exports = {
    Banking(read, num) {
        //create a new queue. 
        var queue = new Queue();
        var balance = 1000;
        for (var i = 0; i < num; i++) {
            queue.enQueue(i);
        }
        while (queue.length()) {
            var option = read.question("Press 1 to deposit money and Press 2 to withdrawal money: ");
            // if we deposit into the account it performs enqueue operation
            if (option == 1) {
                var depositAmount = read.question("Enter the amount to deposit: ");
                balance = (parseInt(balance) + parseInt(depositAmount));
                console.log("Total Balance is= " + balance);
            }
            //if we withdraw from the account it performs dequeue operation
            else if (option == 2) {
                var withdrawAmount = read.question("Enter the amount to withdrawal: ");
                if (balance >= withdrawAmount) {
                    balance = balance - withdrawAmount;
                    console.log("Total balance:" + balance);
                }
                //if bank balance is zero 
                else {
                    console.log("Running out of balance..");
                }
            }
            else {
                console.log("plz contact to nearby branch...");
            }
            queue.deQueue();
        }
    }
}
/*****************************************************************************************************
*****************************************************************************************************/
class Stack {
    constructor() {
        //create new array to store expression with paranthesis
        this.items = [];
        this.top = -1;
    }
    //add paranthesis to the stack at last
    push(element) {
        //this.items.push(element);
        this.items[++this.top] = element;
    }
    //remove or delete paranthesis from from the first of stack.
    pop() {
        if (this.top == -1) {
            return -1;
        }
        else {
            return this.items[this.top--]; //delete the one paranthesis from stack
        }
    }
    peek() {
        //it will return top element of stack without removing it.
        return this.items[this.top];
    }
    isEmpty() {
        //checks if stack is empty are not
        if (this.top == -1)
            return true;
        return false;
    }
    displayStack() {
        // display stack 
        var str = "";
        for (var i = 0; i <= this.top; i++) {
            str += this.items[i] + "";
        }
        console.log(str);
    }
}
module.exports = {
    balancedParanthesis(expression) {
        //create a new stack. 
        var stack = new Stack();
        var openParanthesis = 0;
        var closeParanthesis = 0;
        for (let i = 0; i < expression.length; i++) {
            //the expressions open pranthesis will push to the stack 
            if (expression[i] == "(") {
                stack.push(expression[i]);
                openParanthesis++; //count the total push
                // stack.displayStack();
            }
            //while closing paranthesis it will perform pop opeartion.
            else if (expression[i] == ")") {
                stack.pop();
                closeParanthesis++;
                //console.log(stack.pop());
            }
        }
        if (openParanthesis == closeParanthesis) {
            console.log("Arithmetic expression is balanced");
        }
        else {
            console.log("Arithmetic expression is not balanced");
        }
    }
}
/********************************************************************************************************* */
/********************************************************************************************************** */
/**
* exports:if a object that get exposed to a module and it is by default in every js file.
**/
var read = require("readline-sync");
module.exports = {
    binomialCoeff(n, k) {
        var res = 1;
        // Since C(n, k) = C(n, n-k) 
        if (k > n - k) {
            k = n - k;
        }
        /*
        * Calculate value of  [n*(n-1)*---*(n-k+1)] [k*(k-1)*---*1] 
        */
        for (let i = 0; i < k; ++i) {
            res = res * (n - i);
            res = Math.floor(res / (i + 1));
        }
        return res;
    },
    inputread() {
        var indices = read.question("");
        return indices;
    },
    /**
     * A Binomial coefficient based method to find nth catalan number  
     */
    catalan(n) {
        // Calculate value of 2nCn 
        var c = this.binomialCoeff(2 * n, n);
        var z = parseInt(n);
        var s = c / (z + 1);
        return s;
    },
    /**
     * A function to count number of  BST with n nodes using catalan number
     */
    countBST(n) {
        // find nth catalan number 
        let count = this.catalan(n);

        // return nth catalan number 
        return count;
    }
}
var read = require('readline-sync');
/******************************************************************************************************* */
/************************************************************************************************************
* exports:if a object that get exposed to a module and it is by default in every js file.
**/
module.exports = {
    isLeapYear(year) {
        /*
        * ensure year is of four digit
        */
        //condition for checking leap 
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        else {
            return false;
        }
    },
    /*
    * condition for calculate the day, month and year
    */
    /*day(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        //console.log(d0);
        return d0;
    },*/
    day(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;
    },
}
/************************************************************************************************************ */
/********************************************************************************************************* */
function deQueue() {
    this.string = new Array();
    // remove the item from back
    this.popback = function () {
        return this.string.pop();
    }
    //we can also write as, function popback(){return this.string.pop();}
    //add the item into back
    this.pushback = function (item) {
        return this.string.push(item);
    }
    //remove the item from front
    this.popfront = function () {
        return this.string.shift();
    }
    //add the item into front
    this.pushfront = function (item) {
        return this.string.unshift(item);
    }
    // print dequeue
    this.printQueue = function () {
        var str = '';
        for (var i = 0; i < this.string.length; i++) {
            str += this.string[i] + " ";
        }
        return str;
    }
    //returns the length of deQueue
    this.size = function () {
        return this.string.length;
    }
}
//exports if a object that get exposed to a module and it is by default in every js file.
module.exports = {
    Palindrome(str) {
        // create a new deque. 
        var deque = new deQueue();
        var array = [];
        array = str.split('');
        for (var i = 0; i < array.length; i++) {
            deque.pushback(array[i]);
        }
        console.log(deque.printQueue());
        var flag = true;
        // checks the deque size
        while (deque.size() > 1) {
            var a = deque.popfront();
            console.log(a);
            var b = deque.popback();
            console.log(b);
            if (a != b) {
                flag = false;
            }
        }

        // if the strings are equal returns this statements
        if (flag == true) {
            console.log("Palindrome");
        }
        else {
            console.log("Not a Palindrome");
        }
    }
}
/************************************************************************************************************ */
/************************************************************************************************************
* exports:if a object that get exposed to a module and it is by default in every js file.
**/
module.exports = {
    isLeapYear(year) {
        /*
        * ensure year is of four digit
        */
        //condition for checking leap 
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        else {
            return false;
        }
    },
    /*
    * condition for calculate the day, month and year
    */
    /*day(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        //console.log(d0);
        return d0;
    },*/
    day(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        return d0;
    },
}
var read = require('readline-sync');


class Qnode {
    constructor(key) {
        this.next = null;
        this.key = key;
    }
}
/*
* creating QueuedLinkedList class to create any new node with null values.
 */
class QueuedLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
    }
	/*
	* it will add or store the items
	*/
    enque(key) {
        var temp = new Qnode(key);
        if (this.rear == null) {
            this.rear = this.front = temp;
            return;
        }
        this.rear.next = temp;
        this.rear = temp;
    }
	/*
	* it will remove or access the items
	*/
    deque() {
        if (this.front == null) {
            return null;
        }
        var temp = this.front;
        this.front = this.front.next;
        if (this.front == null) {
            this.rear = null;
        }
        return temp.key;
    }
	/*display(){
		var t = this.front;
		while(t!=null){
			console.log(t.key);
			if(t.next!=null)
				console.log(" --> ");
			t = t.next;
		}
		console.log("");
	}*/
	/*
	* it will display the items
	*/
    display2() {
        var t = this.front;
        while (t != null) {
            console.log(t.key);
            if (t.next != null)
                console.log("  ");
            t = t.next;
        }
        console.log();
        console.log();
    }
	/*
	* it will display the calender
	*/
    displayCalender(d) {
        var t = this.front;
        var t2 = this.front;
        var count = 0;
        while (t.key == " ") {
            console.log("   ");
            t = t.next;
        }
        while (t != null) {
            count++;
            console.log(" ", t.key);
            if (t.key < 10) {
                console.log(" ");
            }
            if (((count + d) % 7 == 0)) {
                console.log("");
            }
            t = t.next;
        }
        count = 0;
    }
}
/**
* exports:if a object that get exposed to a module and it is by default in every js file.
**/
module.exports = {
    QueuedLinkedList
}
/**
* exports:if a object that get exposed to a module and it is by default in every js file.
**/
module.exports = {
    StackedLink
}
/*
* creating a StackedLink class to create any new node with null values.
 */
class StackedLink {
    constructor() {
        this.top = null;
    }

    /*
    * it will add or store the items
    */
    push(item) {
        var temp = new Node();
        temp.data = item;
        temp.next = this.top;
        this.top = temp;
    }
    /*
    * it will remove or access the items
    */
    pop() {
        if (this.top == null) {
            console.log("Stack Underflowed");
            return;
        }
        this.top = this.top.next;
    }
    /*
    * checks if file is empty are not
    */
    isEmpty() {
        return this.top == null;
    }
    /*
    * it will used to fetch the first element of the stack
    */
    peek() {
        if (!this.isEmpty()) {
            return this.top.data;
        } else {
            console.log("stack is empty");
            return -1;
        }
    }
    /*
    * display the given list after performing changes.
    */
    display() {
        if (this.top == null) {
            console.log("Stack Underflowed");
            return;
        }
        else {
            var temp = this.top;
            var show = "";
            while (temp != null) {
                show = show + temp.data;
                if (temp.next != null) {
                    show = show + " --> "
                }
                temp = temp.next;
            }
            console.log(show);
        }
    }
    /*
    * it will display the days in calender
    */
    displayDays() {
        if (this.top == null) {
            console.log("Stack Underflowed");
            return;
        }
        else {
            var temp = this.top;
            var show = "";
            while (temp != null) {
                show = show + temp.data;
                if (temp.next != null) {
                    show = show + "  "
                }
                temp = temp.next;
            }
            console.log(show);
        }
    }
    /*
    * it will display the calender
    */
    displayCalender(d) {
        var t = this.top;
        var count = 0;
        while (t.data == " ") {
            console.log("   ");
            t = t.next;
        }
        while (t != null) {
            count++;
            console.log(" ", t.data);
            if (t.data < 10) {
                console.log(" ");
            }
            if (((count + d) % 7 == 0)) {
                console.log("");
            }
            t = t.next;
        }
        count = 0;
    }
    /*
    * it will operates in reverse and point to previous element
    */
    reverse() {
        var prev = null;
        var current = this.top;
        var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.top = prev;
    }
    /*
    * it will display in reverse 
    */
    displayReverse(top) {
        if (top == null)
            return;
        this.displayReverse(top.next);
        console.log(top.data);
        if (top.next != top)
            console.log(" --> ");
    }
    getHead() {
        return this.top;
    }
}

