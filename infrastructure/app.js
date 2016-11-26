'use strict';

const
    config = require('./config'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

console.log('./' + config.appRoot);
app.use(express.static(__dirname + '/../' + config.appRoot));

module.exports = app