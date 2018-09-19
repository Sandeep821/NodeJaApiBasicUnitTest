var express = require('express');
var getData = require('./get-data.js');
var app = express();
app.get('/', function (req, res) {
 
  console.log('GetDATA', getData);
  res.status(200).send(getData);
});
var server = app.listen(3001, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});
module.exports = server;