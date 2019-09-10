let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('findItemsOver20' , function(){
    it('should return all the products that have a quantity higher than 20' , function(){

        var itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
          ];

          var results = [{ name: 'pears', qty: 37 },   
  { name: 'bananas', qty: 27 }]
  

    assert.deepEqual(findItemsOver20(itemList),results)
    })
    it('should return nothing if no products have a quantity higher than 20' , function(){

        assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":3}]), [])
        });
});