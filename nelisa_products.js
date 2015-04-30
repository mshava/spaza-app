    var fs = require('fs');

    module.exports = function(){

      this.productList = function(filePath){

        var linesInFile = fs.readFileSync(filePath, "utf8");

        var rows = linesInFile.split('\r');
          //console.log(rows.length);

          var listOfProducts = [];
          
          rows.forEach(function(row){
            var columns = row.split(';');
            var currentItem = columns[2];
            var numberSold = columns[3];

            var salesObj = {
              itemName : columns[2],
              soldItem: Number(columns[3])
            };
            listOfProducts.push(salesObj);
          });

          return listOfProducts;
        }

        this.groupItems = function(products) {
          var itemMap = {};

          products.forEach(function(products) {
            var currentItem = products.itemName;
            var numberSold = products.soldItem;

            if(itemMap[currentItem] === undefined){
              itemMap[currentItem] = 0;
            }

            itemMap[currentItem] = itemMap[currentItem] + Number(numberSold);

          });
          return itemMap;

        };

            //Think about creating a list of objects from the csv
               //Create a function that find the most popular product, put it in a module and write a unit test.
        this.mostPopularPdt = function(itemMap){
                //console.log(itemMap);
                 var mostPopularProduct = {};
                 var max = 0;
                 for(var prop in itemMap) {
                     
                    var value = itemMap[prop];
                    
                    if(itemMap[prop] > max) {
                      max = itemMap[prop];
                      mostPopularProduct = {
                        name : prop,
                        amt  : max
                     };
                 }
               }
               //console.log(mostPopularProduct);
               return mostPopularProduct;
             };

             this.leastPopularPdt = function(itemMap){
               var leastPopularProduct = {};
               var min = 172;
               for(var prop in itemMap) {
                 var value = itemMap[prop];
                 if(itemMap[prop] < min) {
                  min = itemMap[prop];
                  leastPopularProduct = {
                   name : prop,
                   amt  : min
                 }
               }
             }
               //console.log(itemMap);
               return leastPopularProduct;
             };

             this.groupCat = function(categories) {

              var productCategories = {
                'Milk 1l': 'Dairy Products',
                'Imasi': 'Dairy Products',
                'Bread': 'Bakery',
                'Chakalaka Can': 'Canned Food',
                'Gold Dish Vegetable Curry Can': 'Canned Food',
                'Fanta 500ml': 'Cold Beverages',
                'Coke 500ml': 'Cold Beverages',
                'Cream Soda 500ml': 'Cold Beverages',
                'Iwisa Pap 5kg': 'Bulk',
                'Top Class Soy Mince': 'Soup',
                'Shampoo 1 litre': 'Cosmetics',
                'Soap Bar': 'Cosmetics',
                'Bananas - loose': 'Fruit',
                'Apples - loose': 'Fruit',
                'Mixed Sweets 5s': 'Confectionery',
                'Heart Chocolates': 'Confectionery',
                'Rose (plastic)': 'Valentines Goodies',
                'Valentine Cards': 'Valentines Goodies'
              }
              var catMap = {};

              categories.forEach(function(categories) {
          //get the category for the current product!!!!!!
          var category = categories.itemName;
          var prodQty = categories.soldItems;

          if (catMap[category] === undefined){
            catMap[category] = 0;
          }
          // get the quantity for the current product
          
          //add the qty to the correct category 
          catMap[category] = catMap[category] + Number(prodQty); 
        });

        //console.log(catMap);
        return catMap
      };

      this.mostPopularCat = function(catMap){
        var mostPopularCategory = {};
        var max = 0;

        for(var prop in catMap) {
          var value = catMap[prop];
          if(catMap[prop] > max){
            max = catMap[prop];
            mostPopularCategory = {
              name: prop,
              amt: max
            }
          }
        }
        //console.log(mostPopularCategory)
        return mostPopularCategory;
      }; 

      this.leastPopularCat = function(catMap){
       var leastPopularCategory = {};
       var min = 328;
       for(var prop in catMap) {
         var value = catMap[prop];
         if(catMap[prop] < min) {
          min = catMap[prop];
          leastPopularCategory = {
           name : prop,
           amt  : min
         }
       }
     }
            // console.log(leastPopularCategory);
            return leastPopularCategory;
          };
        };