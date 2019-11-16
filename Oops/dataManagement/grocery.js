/*************************************************************************************************
*  @Purpose        : To create a proper Business logic for dataManagement code          
*  @file           : grocery.js
*  @author         : GIRISH B R
*  @since          : 11-11-2019
***************************************************************************************************/
class Grocery{
    constructor(name,weight,price){
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    total(){
        return this.weight*this.price;
    }
}
class Rice extends Grocery{
    constructor(name,weight,price){
        super(name,weight,price)
    }
}
class Pulses extends Grocery{
    constructor(name,weight,price){
        super(name,weight,price)
    }
}
class wheat extends Grocery{
    constructor(name,weight,price){
        super(name,weight,price)
    }
}
module.exports=Rice,wheat,Pulses;