/************************************ 
* @Purpose : to implement mediator pattern
* @File   : mediatorPattern.js
* @Author : Girish B R
* @Date   : 10-11-2019
*************************************/
//create class
class chat {
    //create one constructor
    constructor(user, message) {
        this.user = user;
        this.message = message;
    }
    showMessage() {
        //dsiplays message
        console.log("User name is: " + this.user + " and message:" + this.message);
    }
}
//create class
class User {
    //create constructor
    constructor(name) {
        this.name = name;
    }
    //set method
    setName(nm) {
        this.name = nm;
    }
    //get method
    getName() {
        this.name;
    }
    //method to send message
    sendMessage(message) {
        this.message = message;
        let cr = new chat
            (this.name, this.message);
        cr.showMessage();
    }
}
//instanstiate user
let girish = new User();
let rohan = new User();
//call set method
girish.setName("Girish");
rohan.setName("rohan");
//call sendMessage
girish.sendMessage("hi Mysore");
rohan.sendMessage("hi bangalore");
