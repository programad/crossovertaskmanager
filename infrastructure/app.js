'use strict';

const
    config = require('./config'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../' + config.appRoot));

module.exports = app