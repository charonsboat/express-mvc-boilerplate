var assert = require('assert');

var express = require('express');
var app = express();


// Run basic test on Router to make sure no exceptions are thrown.
describe('Server', function ()
{
	describe('Testing Router', function ()
	{
		it('Calling Route Method', function ()
		{
			var router = require('../router');

			assert.equal(router.Route(app, express), true);
		});
	});
});