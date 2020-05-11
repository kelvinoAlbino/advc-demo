var express = require('express');
//var mongoose = require('mongoose');
var ejs = require('ejs');
var ejsLocals = require('ejs-locals');
var path = require('path');
var routes = require('./routes');

//mongoose.connect( 'mongodb://localhost/advc-demo', { useNewUrlParser: true, useUnifiedTopology: true } );

var app = express();

app.engine('ejs', ejsLocals);

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/assets')));

app.use('/', routes);

app.listen('5000', function(){
  console.log('App running at Localhost 5000');
});