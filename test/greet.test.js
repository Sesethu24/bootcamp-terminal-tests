let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Sesethu correctly', function(){
        assert.equal('Hello, Sesethu', greet('Sesethu'));
    });
    it('should greet Victor correctly', function(){
       
        assert.equal('Hello, Victor', greet('Victor'));
    });
});