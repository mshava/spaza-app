var Products = require("./nelisa_products");
var products = new Products();

var productList = products.productList('./Nelisa Sales History.csv');
var productMap = products.groupItems(productList);

var popularProduct = products.mostPopularPdt(productMap);
    //console.log("Most popular product with total number of sales:");
    //console.log("===============================================");

console.log(popularProduct);

for(key in popularProduct){
     console.log(key + "=>" + popularProduct[key]);    
}

 var leastPopularProduct = products.leastPopularPdt(productMap);
    //console.log("Least popular product with total number of sales:");
    //console.log("===============================================");

    for(key in leastPopularProduct){
            //console.log(key + "=>" + leastPopularProduct[key]);
        }
        var categoryMap = {
         'Milk 1l':'beverages',
         'Imasi':'beverages',
         'Bread': 'bakery',
         'Chakalaka Can': 'canned food',
         'Gold Dish Vegestable Curry Can': 'canned food',
         'Fanta 500ml':'beverages',
         'Coke 500ml': 'beverages',
         'Cream Soda 500ml':'beverages',
         'Iwisa Pap 5kg': 'Starch Food',
         'Top Class Soy Mince':'meat',
         'Shampoo 1 litre':'Toiletries',
         'Soap Bar -50':'Toiletries',
         'Bananas - loose':'fruits',
         'Apples - loose':'fruits',
         'Mixed Sweets 5s':'fruits',
         'Heart Chocolates': 'candy',
         'Rose (plastic)': 'extras',
         'Valentine Cards': 'extras'
     };

     var catMap = {
        'Milk 1l':142,
        'Imasi':125,
        'Bread': 130,
        'Chakalaka Can':94 ,
        'Gold Dish Vegestable Curry Can': 86,
        'Fanta 500ml':94,
        'Coke 500ml':159 ,
        'Cream Soda 500ml':75,
        'Iwisa Pap 5kg': 47,
        'Top Class Soy Mince':98,
        'Shampoo 1 litre':26,
        'Soap Bar -50':50,
        'Bananas - loose':114,
        'Apples - loose':114,
        'Mixed Sweets 5s':172,
        'Heart Chocolates': 20,
        'Rose (plastic)':14 ,
        'Valentine Cards': 14,
    };




    var mostPopularCategory = products.mostPopularCat(categoryMap);
    for(key in catMap){
        console.log(key + "=>" + mostPopularCategory[key]);    
    }



        //var mostPopularCategory = products.popularCategory(categoryMap);
        //var leastPopularCategory = products.leastPopularCategory(categoryMap);
        
        //console.log("Available categories with total number of sales:");
        //console.log("===============================================");

        //for(var key in categoryMap){
            //console.log(key + " => " + categoryMap[key] );
        //}

        //console.log("Most popular category and its sales amount:");
        //console.log("===============================================");

        for(var key in mostPopularCategory){
            console.log(key + " => " + mostPopularCategory[key] );
        }//
        //console.log("Least popular category and its sales amount:");
        //console.log("===============================================");

        for(var key in leastPopularProduct){
            //console.log(key + " => " + leastPopularProduct[key] );
        }