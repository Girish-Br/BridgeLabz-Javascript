/************************************ 
* @Purpose : to implement prortotype pattern
* @File   : prortypeDesignPattern.js
* @Author : Girish B R
* @Date   : 10-11-2019
**************************************/
//student function
function student(name,age,add){
    this.name=name;
    this.age=age;
    this.add=add;
    this.say=()=>{
        console.log(`Student name is ${this.name} and age is ${this.age} and address is ${this.add} `);
    };

}
//function to show prototype
function customerPrototype(proto){
    this.proto=proto;
     this.clone=function(){
        var std=new student();
        std.name=proto.name;
        std.age=proto.age;
        std.add=proto.add;
        return std;
    };
}
//instantiating student is costly so we will use customerPrototype each time
function run(){
var proto=new student('abc','25','mysore');
var prototype=new customerPrototype(proto);
var std=prototype.clone();
std.say();
}
run();
