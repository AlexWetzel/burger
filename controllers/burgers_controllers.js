var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	burger.select(function(data) {
		var burgObj = {
			burgers: data
		};
		console.log(burgObj.burgers[0].burger_name)
		var burgers =
		res.render("index", burgObj);
	});
	
});

router.post("/api/burgers", function(req, res) {
	console.log(req.body);
	burger.insert(req.body.name, function(result) {
		res.json({ id: result.insertId });
	});
});

module.exports = router;