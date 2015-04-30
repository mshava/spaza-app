var express = require('express');
var exphbs  = require('express-handlebars');

var fs = require('fs');

var Products = require('./nelisa_products');
var products = new Products();

var itemArr = products.productList('./Nelisa Sales History.csv');

var group = products.groupItems(itemArr);


var mostPop = products.mostPopularPdt(group);
	
console.log(mostPop);

var leastPop = products.leastPopularPdt(group);

console.log(leastPop);

//console.log(leastPop);
var app = express ();
  // create a route
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res){
	res.render("index");
});

app.get("/products", function (req, res) {
	var productList = [];

	for (key in itemMap){
		productList.push({
			name:key,
			qty:itemMap[key]
		});
	}
	res.render("products", {products :productList});
});

app.get("/popular", function (req, res) {

	var popular = [];

	
	for(key in mostPop){

		popular.push({
			name : key,
			qty : mostPop[key]
		});

	}

	  console.log(mostPop);
	

	res.render("popular_products");
	//res.send("tomorrow");
});
		
app.get("/least", function (req, res) {
	var leastPop = [];

	for(key  in leastPopularProduct){

		leastPop.push({
			name : key,
			qty : leastPopularProduct[key]
		});

	}
	res.render("leastPopular",{products : leastPop});
});

app.get('/persona', function(req, res){
	res.render("persona");
});
	
app.get('/site_help', function(req, res){
	res.render("site_help");
});

var port = process.env.PORT || 8080;

var server = app.listen(port,function(){
	var host = server.address().address;
	var port =server.address().port;
	console.log('Example app listening at http://%s:%s',host,port);
});
