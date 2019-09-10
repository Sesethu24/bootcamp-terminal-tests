let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday' , function(){
    it('should return true if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Monday'), true);

        
    });
    it('return false if the parameter passed in is not a weekday' , function(){
        assert.equal(isWeekday('Saturday'), false);

        
    });

});