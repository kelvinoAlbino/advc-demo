var express = require('express');
var ejs = require('ejs');
var ejsLocals = require('ejs-locals');
var path = require('path');
var routes = require('./routes');

var app = express();

app.engine('ejs', ejsLocals);

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/assets')));

app.use('/', routes);

app.listen('5000', function(){
  console.log('App running at Localhost 5000');
});