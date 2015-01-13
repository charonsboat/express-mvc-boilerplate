module.exports = {
	getIndex: function (req, res)
	{
		res.render('home');
	}, 

	getTest: function (req, res)
	{
		res.send('testing!');
	}
}