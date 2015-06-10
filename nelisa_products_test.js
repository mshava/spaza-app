var assert = require("assert");

describe("Find data in file", function(){

    it('should return all products as they are in the csv file', function(done){
        var Products = require("./productsSold");
        var products = new Products('./Nelisa Sales History.csv');
        products.productNames(function(err, product){
        assert.equal(449, product.length);
        //assert.equal("Imasi", product[2].itemName);
        done();
        });
         
    });

    it('should return grouped items', function(){
        var Products = require("./productsSold");
        var products = new Products('./Nelisa Sales History.csv');
<<<<<<< HEAD
        var groupedProducts = products.groupedItems();
        console.log(groupedProducts);
        assert.equal(125, groupedProducts["Imasi"]);
       
=======
        //most_popular_product.mostPopularProduct(function(err, most_popular_product){

            var listOfProducts  = [
            {itemName: 'Milk', soldItem: 142},
            {itemName: 'Imasi', soldItem: 125},
            {itemName: 'Bread', soldItem: 130},
            {itemName: 'Chakalaka Can', soldItem: 94},
            {itemName: 'Gold Dish Vegetable Curry  Can', soldItem: 86},
            {itemName: 'Fanta 500ml', soldItem: 94},
            {itemName: 'Coke 500ml', soldItem: 159},
            {itemName: 'Cream Soda 500ml', soldItem: 75},
            {itemName: 'Iwisa Pap 5kg', soldItem: 47},
            {itemName: 'Top Class Soy Mince', soldItem: 98},
            {itemName: 'Shampoo 1l', soldItem: 26},
            {itemName: 'Soap Bar', soldItem: 50},
            {itemName: 'Bananas - loose', soldItem: 114},
            {itemName: 'Apples', soldItem: 114},
            {itemName: 'Mixed Sweets 5s', soldItem: 172},
            {itemName: 'Heart Chocolates', soldItem: 20},
            {itemName: 'Rose (plastic)', soldItem: 14},
            {itemName: 'Valentine Cards', soldItem: 14}
            ];

            var expectedMap = {'Milk': 142,'Imasi': 125,'Bread': 130,'Chakalaka Can': 94,'Gold Dish Vegetable Curry  Can': 86,'Fanta 500ml': 94,'Coke 500ml': 159,'Cream Soda 500ml': 75,'Iwisa Pap 5kg': 47,'Top Class Soy Mince': 98,'Shampoo 1l': 26,'Soap Bar': 50,'Bananas - loose': 114,'Apples': 114,'Mixed Sweets 5s': 172,'Heart Chocolates': 20,'Rose (plastic)': 14,'Valentine Cards': 14};
            var productMap = products.groupItems(listOfProducts);
               //console.log(listOfProducts);
            assert.deepEqual(expectedMap, productMap);

           
>>>>>>> c0c94285c9b9cb02a950778ec32cf5ac42020568
    });
    
it('should return most popular items', function(){
        var Products = require("./productsSold");
        var products = new Products('./Nelisa Sales History.csv');
        var popularProduct = products.mostPopular();
        var result = {currentItem : 'Mixed Sweets 5s', numberSold:172};
        // did the right thing happen...?!
        assert.deepEqual(popularProduct, result)
    });

it('should return the least popular item', function(){
    var Products = require("./productsSold");
    var products = new Products('./Nelisa Sales History.csv');
    var leastPopular = products.leastPopular();
    var result = {currentItem: 'Valentine Cards', numberSold:14};
    assert.deepEqual(leastPopular, result)
    });

it('should return the most popular category and the least popular', function(){
    var Products = require("./productsSold");
    var products = new Products('./Nelisa Sales History.csv');

    var  productMap = {
          'Milk 1l': 142,
          'Imasi': 125,
          'Bread': 130,
          'Chakalaka Can': 94,
          'Gold Dish Vegetable Curry Can': 86,
          'Fanta 500ml': 94,
          'Coke 500ml': 159,
          'Cream Soda 500ml': 75,
          'Iwisa Pap 5kg': 47,
          'Top Class Soy Mince': 98,
          'Shampoo 1 litre': 26,
          'Soap Bar': 50,
          'Bananas - loose': 114,
          'Apples - loose': 114,
          'Mixed Sweets 5s': 172,
          'Heart Chocolates': 20,
          'Rose (plastic)': 14,
          'Valentine Cards': 14 };

          var catMap = {
            'Dairy Products': 267,
            'Bakery': 130,
            'Bulk': 47,
            'Confectionery': 192,
            'Cosmectics': 76,
            'Fruits': 128,
            'Cold Beverages': 328,
            'Canned Food': 180,
            'Valentines Goodies': 28,
            'Soup': 98 
          }

          var result = {currentItem: 'Cold Beverages', numberSold: 328};
          var categoryData = products.category(productMap);
          console.log(categoryData);
          assert.deepEqual(result, categoryData.mostPopularCat);

})

it('should return the least popular category', function(){
    var Products = require("./productsSold");
    var products = new Products('./Nelisa Sales History.csv');

    var  productMap = {
          'Milk 1l': 142,
          'Imasi': 125,
          'Bread': 130,
          'Chakalaka Can': 94,
          'Gold Dish Vegetable Curry Can': 86,
          'Fanta 500ml': 94,
          'Coke 500ml': 159,
          'Cream Soda 500ml': 75,
          'Iwisa Pap 5kg': 47,
          'Top Class Soy Mince': 98,
          'Shampoo 1 litre': 26,
          'Soap Bar': 50,
          'Bananas - loose': 114,
          'Apples - loose': 114,
          'Mixed Sweets 5s': 172,
          'Heart Chocolates': 20,
          'Rose (plastic)': 14,
          'Valentine Cards': 14 };

          var catMap = {
            'Dairy Products': 267,
            'Bakery': 130,
            'Bulk': 47,
            'Confectionery': 192,
            'Cosmectics': 76,
            'Fruits': 128,
            'Cold Beverages': 328,
            'Canned Food': 180,
            'Valentines Goodies': 28,
            'Soup': 98 
          }
       
          var result = {currentItem: 'Valentine Goodies', numberSold: 28};
          var categoryData = products.category(productMap);
          console.log(categoryData);
          assert.deepEqual(result, categoryData.leastPopularCat);

})

it('should return earnings per product', function(){
  var Products = require("./productsSold");
  var products = new Products('./Nelisa Sales History.csv');
  var earningPerProduct = products.earningPerPrdct();


    var result = {

       'Milk 1l': 1420,
        'Imasi': 3125,
        'Bread': 1560,
      'Chakalaka Can': 940,
      'Gold Dish Vegetable Curry Can': 774,
      'Fanta 500ml': 611,

      'Coke 500ml': 1033.5,
      'Cream Soda 500ml': 562.5,
      'Iwisa Pap 5kg': 1410,
      'Top Class Soy Mince': 1176,
      'Shampoo 1 litre': 780,
      'Soap Bar': 300,
      'Bananas - loose': 228,
      'Apples - loose': 228,
      'Mixed Sweets 5s': 455,
      'Heart Chocolates': 700,
      'Rose (plastic)': 210,
      'Valentine Cards': 56 

        };

  assert.deepEqual(result, earningPerProduct);
 })

});
