var assert = require('assert');

var express = require('express');
var app = express();

var load = require('express-load')

load('../models', { verbose: true })
	.then('../controllers', { verbose: true })
	.then('../routes')
	.into(app);


// Run basic test on Router to make sure no exceptions are thrown.
describe('Server', function ()
{
	describe('Testing Router', function ()
	{
		it('Calling Route Method', function ()
		{
			assert.equal(app.routes.router.routes.all(app, express), true);
		});
	});
});