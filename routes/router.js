// Auto-Routes Urls to matching Controllers/Actions. It IS case sensitive at the 
// moment, but I am working on fixing that.

var router = {
	autoRoute: function (app, express)
	{
		var autoRouter = express.Router();

		autoRouter.get('/', app.controllers.home.getIndex);

		autoRouter.all('/:controller', function (req, res)
		{
			var method = req.method.toLowerCase();
			var controller = app.controllers[req.params.controller];

			if (controller != null)
			{
				controller[method + 'Index'](req, res);
			}
			else
			{
				// 404
			}
		});

		autoRouter.all('/:controller/:action', function (req, res)
		{
			var method = req.method.toLowerCase();
			var controller = app.controllers[req.params.controller];

			if (controller != null)
			{
				var action = controller[method + req.params.action];

				if (action != null)
				{
					action(req, res);
				}
				else
				{
					// 404 or redirect to Index
				}
			}
			else
			{
				// 404
			}
		});

		autoRouter.all('/:controller/:action/:id', function (req, res)
		{
			var method = req.method.toLowerCase();
			var controller = app.controllers[req.params.controller];

			if (controller != null)
			{
				var action = controller[method + req.params.action];

				if (action != null)
				{
					action(req, res);
				}
				else
				{
					// 404 or redirect to Index
				}
			}
			else
			{
				// 404
			}
		});

		app.use('/', autoRouter);

		return true;
	}
}

module.exports = router;