var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var urlencodedParser = bodyParser.urlencoded({extended: false});

require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req, res){
  console.log('base url');
  res.sendFile(path.resolve('public/views/index.html'));
});

var env = process.env.RIOT_KEY;

app.get('/key', function(req, res){
  var env = process.env.RIOT_KEY;
  res.json(env);
});

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), function(){
  console.log('on port', app.get('port'));
});
