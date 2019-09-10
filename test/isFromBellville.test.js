let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('is From Bellville' , function(){
    it('should return true if the registration number is from Bellville' , function(){
    assert.equal(isFromBellville('CY'), true);
    
    });
    it('should return false if the registration number is not from Bellville' , function(){
        assert.equal(isFromBellville('CA'), false);
        
    });
        
});