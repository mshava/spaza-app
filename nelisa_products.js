<<<<<<< HEAD
   var fs = require('fs');

	module.exports = function(folderName){
		this.productNames = function(callback) {
			var linesInFile = fs.readFileSync(folderName, "utf8"); 
			var lines = linesInFile.split('\r');
			var productList =[];

			lines.forEach(function(fileLines){

				var product = fileLines.split(';');
				
				var currentItem = product[2];
				var productTotal = product[3];

				var productMap = {
					itemName : currentItem,
					soldItems : Number(productTotal)
				};
				productList.push(productMap);
			  });

			callback(null, productList);
		};

		this.groupedItems = function(){
			var linesInFile = 	fs.readFileSync(folderName, "utf8");
			var productLines = linesInFile.split('\r');
			var productCountMap = {};
			productLines.forEach(function(productLine){

				var splitLines = productLine.split(';');

				var currentItem = splitLines[2];
				var numberSold =  splitLines[3];

				if(productCountMap[currentItem] === undefined)
	            {
	                    productCountMap[currentItem] = 0;
	            }
	                productCountMap[currentItem] += Number(numberSold);
			});



			return productCountMap;
		};

	var createProductList = function(csvFile){

		// start
		var linesInFile = fs.readFileSync(csvFile, 'utf8');
		var	productsList = linesInFile.split('\r');

		//remove the csv header...
		productsList = productsList.splice(1, productsList.length)
		
		var productList = [];
		var mostPopularMap = {};

		productsList.forEach(function(productLine){

				var hold = productLine.split(';');

				var currentItem = hold[2];
				var numberSold =  hold[3];

				if(mostPopularMap[currentItem] === undefined){
					mostPopularMap[currentItem] = 0;
				}	
					mostPopularMap[currentItem] += Number(numberSold);
				});
		//return mostPopularMap;
		for(var key in mostPopularMap){
			var obj = {
				currentItem : key,
				numberSold: mostPopularMap[key]
			};
			productList.push(obj);

		}
		// end
		return productList;
	}


	this.mostPopular = function(){

		var productList = createProductList(folderName);		

		productList.sort(function(a,b){
			return b.numberSold-a.numberSold;
		});

		//console.log(productList)
		// console.log(productList.length);
		console.log(productList[0])
		return productList[0];
	};

	this.leastPopular = function(){

		var productList = createProductList(folderName);		

		productList.sort(function(a,b){
			return b.numberSold-a.numberSold;
		});

		//console.log(productList)
		console.log(productList[productList.length-1]);
		// console.log(productList[2])
		return productList[productList.length-1];
	};


//code for gouping products into categories 
	this.category = function(productMap){

		  var catGroup = {
		  	'Imasi': 'Dairy',
		  	'Bread': 'Bakery',
		  	'Chakalaka Can': 'Canned Food',
		  	'Gold Dish Vegetable Curry Can': 'Canned Food',
		  	'Fanta 500ml': 'Cold Beverages',
		  	'Coke 500ml': 'Cold Beverages',
		  	'Milk 1l' : 'Dairy',
		  	'Cream Soda 500ml': 'Cold Beverages',
		  	'Iwisa Pap 5kg': 'Bulk',
		  	'Top Class Soy Mince': 'Soup',
		  	'Shampoo 1 litre': 'Cosmetics',
		  	'Soap Bar': 'Cosmetics',
		  	'Bananas - loose': 'Fruit',
		  	'Apples - loose': 'Fruit',
		  	'Mixed Sweets 5s': 'Confectionery',
		  	'Heart Chocolates': 'Confectionery',
		  	'Rose (plastic)': 'Valentine Goodies',
		  	'Valentine Cards': 'Valentine Goodies',
		  };

	var catMap = {}


	for(var productName in productMap){

		var catName = catGroup[productName];
		var qty = productMap[productName];

		//console.log("==> " + productName + " : " + catName + " : " + qty);

		// is the productName in the map?
		if(catMap[catName] == undefined){
			//if it is not in the map add it to the map...
			catMap[catName] = 0;
		}

		// now add the qty for each product to the correct qty...
		catMap[catName] = catMap[catName] + Number(qty);
	}

	// create a list of categories
	var categoryList = [];
        for(var key in catMap){		
			var obj = {
				currentItem : key,
				numberSold: catMap[key]
			};
			categoryList.push(obj);
		}
	
	//sort the list desc
	categoryList.sort(function(a,b){
			return b.numberSold-a.numberSold;
	});

	//creating an object literal to allow us to return two values
	return {
		mostPopularCat : categoryList[0],
		leastPopularCat : categoryList[categoryList.length-1]
	};

	//return the first one
	//return cat;
		
	};
 
 //reading the Nelisa sales history csv file and splitting it into columns
	this.earningPerPrdct = function(){
		var linesInFile = fs.readFileSync(folderName, "utf8");
		//productLines kubo
		var splitLines = linesInFile.split('\r');

		//skip the first line as it contains the column names
		splitLines = splitLines.splice(1);

		var	totalPrices = {};
        splitLines.forEach(function(splitLine){

				var productLines = splitLine.split(';');
				if(productLines.length === 5){

                 var currentItem = productLines[2];
                 var numberSold = productLines[3];
                 var price = productLines[4];

                 var removeR = price.replace("R","");
                 var removeComma = removeR.replace(",",".");

                 	if(totalPrices[currentItem] === undefined){
                 		totalPrices[currentItem] = 0;
                			 }
                    	totalPrices[currentItem] += Number(numberSold) * Number(removeComma);
						}
					});
        			console.log(totalPrices);

        return totalPrices;
	};



};
=======
       var fs = require('fs');

    module.exports = function(filePath){



      this.productList = function(callback){

        var linesInFile = fs.readFileSync(filePath, "utf8");

        var rows = linesInFile.split('\r');
          //console.log(">>>>>>>>>"+rows);

          var listOfProducts = [];
          
          rows.forEach(function(row){
            var columns = row.split(';');
            var currentItem = columns[2];
            var numberSold = columns[3];

            var salesObj = {
              itemName : columns[2],
              soldItem: Number(numberSold)
            };
            listOfProducts.push(salesObj);
          });
          //console.log(">>>>>>>>>"+listOfProducts);
          callback(null, listOfProducts);
        }

        this.groupItems = function() {
          var linesInFile = fs.readFileSync(filePath, "utf8");

        var rows = linesInFile.split('\r');
        var itemMap = {};
          //console.log(">>>>>>>>>"+rows);

         // console.log("-------->"+rows);

          

          rows.forEach(function(products) {
            var split = products.split(';');
            var currentItem = split[2];
            var numberSold = split[3];

            if(itemMap[currentItem] === undefined){
              itemMap[currentItem] = 0;
            }

            itemMap[currentItem] += Number(numberSold);

          });
          console.log("______________________________________________" + itemMap);
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
               console.log(mostPopularProduct);
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
               console.log(leastPopularProduct);
               return leastPopularProduct;
             };

             this.groupCat = function(itemMap) {
              
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


              for(var key in itemMap){
                if(catMap[productCategories[key]] === undefined){
                  catMap[productCategories[key]] = 0;
                }
                catMap[productCategories[key]] += itemMap[key];
              }
              console.log(catMap);
              return catMap;
              /* 
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

        console.log("-------------------kjjb,,."+catMap);
        return catMap;
      };
*/
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
        console.log(mostPopularCategory)
        return mostPopularCategory;
      }; 

      this.leastPopularCat = function(catMap){
       var leastPopularCategory = {};
       var min = 328;
       for(var prop in catMap) {
         var value = catMap[prop];
         if(value < min) {
          min = value;
          leastPopularCategory = {
           name : prop,
           amt  : min
         }
       }
     }
             console.log(leastPopularCategory);
            return leastPopularCategory;
          };

};



>>>>>>> c0c94285c9b9cb02a950778ec32cf5ac42020568
