module.exports = exports = {

	routes: {
		main: function (app, express)
		{
			var router = express.Router();
			var homeController = require('./controllers/home');

			router.get('/', homeController.index);

			app.use('/', router);
		}, 

		api: function (app, express)
		{
			var api_router = express.Router();

			api_router.get('/', function (req, res)
			{
				res.send('I\'m the API home page!');
			});

			api_router.get('/tests', function (req, res)
			{
				res.send('I\'m the API tests page!');
			});

			api_router.get('/tests/:id', function (req, res)
			{
				res.send('Testing: ' + req.params.id);
			});

			app.use('/api', api_router);
		}
	}, 

	Route: function (app, express)
	{
		exports.routes.main(app, express);
		exports.routes.api(app, express);

		return true;
	}
}