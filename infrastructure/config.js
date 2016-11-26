'use strict';


let environment = process.env.NODE_ENV || 'development';
let port = process.env.PORT || 8080;
let appRoot = environment === 'production' ? 'public' : 'dev';




exports.environment = environment;
exports.port = port;
exports.appRoot = appRoot;