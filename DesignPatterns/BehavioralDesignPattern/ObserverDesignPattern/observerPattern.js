/************************************ 
* @Purpose : to implement Observer pattern
* @File   : observerPattern.js
* @Author : Girish B R
* @Date   : 10-11-2019
*************************************/
//class to show subject
class MyTopic {
    //create constructor
    constructor() {
        this.observer = [];
        this.msg = null;
    }
    //method to know the details of observer
    register(object) {
        this.observer.push(object);
    }
    //to display message
    displayMessage(msg) {
        this.msg = msg;
        this.changed = true;
        this.notifyToObserver()
    }
    notifyToObserver() {
        this.observer.forEach(element => {
            element.update(this.msg);
        });
    }
}
//class to show observer
class subscriber {
    constructor(name) {
        this.name = name;
    }
    setSubject(sub) {
        this.topic = sub;
    }
    update(msg) {
        if (msg == null) {
            console.log('No new Message');
        }
        else {
            console.log(this.name + 'consuming message')
        }
    }
}
//instantiating Mytopic
var topic = new MyTopic();
//create observers
var obj1 = new subscriber("user1");
var obj2 = new subscriber("user2");
var obj3 = new subscriber("user3");
//register observers to the subject
topic.register(obj1);
topic.register(obj2);
topic.register(obj3);
//attach observer to subject
obj1.setSubject(topic);
obj2.setSubject(topic);
obj3.setSubject(topic);
topic.displayMessage("New Message");
//check if any update is available
obj1.update(topic.msg);
//now send message to subject
topic.displayMessage("New Message");