// server.js

// BASE IMPORTS
// ===================================================================

var express = require('express');
var path 	= require('path');
var app		= express();

// CONFIGURATION
// ===================================================================

var env		= require('node-env-file');
	env(path.join(__dirname, '/config/.env'));
var port	= process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layouts/master' });

// ROUTING
// ===================================================================

var router = require('./router');
router.Route(app, express);

// START SERVER
// ===================================================================

app.listen(port);
console.log('App is listening on port ' + port + '...');