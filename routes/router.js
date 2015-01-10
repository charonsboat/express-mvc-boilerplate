var router = {

	routes: {
		home: function (app, express)
		{
			var homeRouter = express.Router();

			homeRouter.get('/', app.controllers.home.index);

			app.use('/', homeRouter);

			return true;
		}, 

		all: function (app, express)
		{
			router.routes.home(app, express);

			return true;
		}
	}
}

module.exports = router;