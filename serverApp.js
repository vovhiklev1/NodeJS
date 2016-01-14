var express = require('express');
var app = express();

/*var options= {

    name : 'Mail API'
};*/
//var server = app.createServer();

app.use(function(req, res, next){
    console.log('middle  ' + req.body);
    next();
})

module.exports = app;
require('./routes');