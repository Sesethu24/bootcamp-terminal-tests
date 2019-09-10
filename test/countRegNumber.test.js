let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('countRegNumber' , function(){
    it('should return the amount of registration numbers in the string' , function(){

        assert.deepEqual(countRegNumber('CA 182736,CY 523519'),(2));
    });
    it('should return number of registration numbers in the string' , function(){

        assert.deepEqual(countRegNumber('CY 523519'),(1));
    });
});