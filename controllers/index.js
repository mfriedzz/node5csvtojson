// Import file

var csvtojson2 = require('../csvtojson.js');


var indexController = {
	index: function(req, res) {
		console.log("render ", csvtojson2);
		res.render('index', {

		 csvtojson: csvtojson2.csvtojson });
		
	}
};

module.exports = indexController;