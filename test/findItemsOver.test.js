let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver' , function(){

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
      ];
      var results = findItemsOver(itemList, 25)
      
    it('should return products that have quantity higher than the threshold.' , function(){

    assert.deepEqual(findItemsOver(itemList, 25),results)
    })
    it('should return nothing if no products have quantity higher than the threshold.' , function(){

        assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37}]), [])
        })
}); 