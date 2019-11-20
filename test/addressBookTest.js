//import assert with chai,
const assert=require('chai').assert
//import readline-sync
var read=require('readline-sync')
//import file
const newbook=require("../Oops/addressBook/addressBook")
 console.log(newbook);
 //starts test
describe('positive testing of newbook',function()
{
    it('check Lastname',function(){
        //checks value with help of assert 
        assert.isString(newbook,'name');
    });
})
describe('negative testing of newbook',function(){
    it('check name',function(){
        //checks value with the help of assert
        assert.isNumber(newbook,'name');
    });
});
