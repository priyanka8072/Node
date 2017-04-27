'use strict';

var express = require('express');
var app = express();
var fs = require("fs");
const PORT = 80;

app.get('/', function (req, res) {
  res.send('Welcome to the portal\n');
});


app.get('/customer', function (req, res) {
   fs.readFile( __dirname + "/" + "customer.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/customer/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "customer.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["customer" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);