module.exports = {
	getIndex: function (req, res)
	{
		res.render('home');
	}, 

	postIndex: function (req, res)
	{
		res.send('posted!');
	}, 

	getTest: function (req, res)
	{
		res.send('testing!');
	}
}