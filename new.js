
var Products = require("./nelisa_products");
var products = new Products('./Nelisa Sales History.csv');

var prodQtyMap = products.groupedItems();
var categoryQty = products.categoryQtySold(prodQtyMap);
console.log(categoryQty);

var mostPopularCategory = products.popularCategory(categoryQty);


for(var key in mostPopularCategory){
    console.log(key + " => " + mostPopularCategory[key] );
}

console.log("========================================");
var leastPopularCategory = products.leastPopularCategory(categoryQty);

for(var key in leastPopularCategory){
    console.log(key + " => " + leastPopularCategory[key] );
}

console.log("========================================");
var popularProduct = products.mostPopular(prodQtyMap);
for(key in popularProduct){
	console.log(key + "=>" + popularProduct[key]);    
}

console.log("========================================");
var leastPopularProduct = products.leastPopular(prodQtyMap);
for(key in leastPopularProduct){
console.log(key + "=>" + leastPopularProduct[key]);    
}