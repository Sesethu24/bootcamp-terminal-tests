let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('totalPhoneBill' , function(){
    it('should return the total cost for 3 smss.' , function(){
       

        assert.equal(totalPhoneBill("sms, sms, sms"), "R1.95")
    });

    it('should return the total cost for 2 calls.' , function(){
       

        assert.equal(totalPhoneBill("call, call"), "R5.50")
    });

    it('should return the total cost for the phoneBill.' , function(){
       

        assert.equal(totalPhoneBill("sms, sms, sms, call, call"), "R7.45")
    });

});
