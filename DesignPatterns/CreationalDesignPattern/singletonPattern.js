/************************************ 
* @Purpose : to implement singleton pattern
* @File   : singletonPattern.js
* @Author : Girish B R
* @Date   : 10-11-2019
*************************************/
//declare as var to be private
var Singleton = (function () {
    var instance;
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
//creates instance at first call and calls the same instance on further calls
function run() {
    var instance1 = Singleton.getInstance();
    console.log(instance1);
    var instance2 = Singleton.getInstance();
    console.log(instance2)
    if (instance1 === instance2) {
        console.log("I am SingleTon");
    } else {
        console.log("I am not singleTon");
    }
}
run();