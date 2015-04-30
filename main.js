var fs = require('fs');
var products = require('./most_popular_products');

var products = new Products();

var itemArr = products.productsList('./Nelisa Sales History.csv');

var group = products.groupItem(itemArr);

var mostPop = products.mostPopularPrd(group);
	
	console.log(mostPop);


	var fs = require('fs');
	var products = require('./least_popular_products');

	var products = new Products();

	var itemArr = products.productsList('./Nelisa Sales History.csv');

	var group = products.groupItem(itemArr);

	var leastPop = products.leastPopularPrd(group);

		console.log(leastPop);