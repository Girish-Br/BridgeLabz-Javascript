//import chai,
let chai=require("chai");
let expect=chai.expect;
let addition=require('./demo');
//starts test
describe('addition', function(){
   it('it should add 2 nos', (done)=>{
       addition.add(1,4).then(function(result){
           expect(result).to.equal(5);
           done();
       }).catch(function(err){
           done(err)
       })
   });
   it('it should reject', function(done){
       addition.add(1,4).catch(function(err){
           expect(err).to.equal("x should be greater then 0");
       })
       .then(function(){done()})
       .catch(function(err){
           done(err);
       })
    })
})
