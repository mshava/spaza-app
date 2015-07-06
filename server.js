var express = require('express');
var app = express();
//rendering static files 
app.use(express.static('public'));

//creat a route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//creat a rout for hello
app.get('/hello', function (req, res) {
  res.send('Hello Codex!');
});


//start the server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


