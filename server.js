var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var request = require('request');

var indexRouter = require('./routes/index');
var gifRouter = require('./routes/gifsRoute')

app.use(bodyParser.json());
app.use(express.static('public'));

require('dotenv').config();

app.use('/', indexRouter);
app.use('/gifs', gifRouter);

app.listen(port, function (req, res) {
    console.log('listening on port 3000');

})