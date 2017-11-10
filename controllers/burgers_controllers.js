var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	
	burger.select(function(data) {
		var burgObj = {
			burgers: data
		};
		
		res.render("index", burgObj);
		
	});
	
});

router.post("/api/burgers", function(req, res) {
	console.log(req.body);
	burger.insert(req.body.name, function(result) {
		res.json({ id: result.insertId });
	});
});

router.put("/api/burgers/:id", function(req, res) {
	console.log("data recieved");
	console.log(req.body);

	var id = req.params.id;

	console.log(id);

	var condition = "id = " + id;

	var setValue = "devoured = 1";

	burger.update(setValue, condition, function(result) {
		console.log("controller.js working")
		 if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
	      return res.status(404).end();
	    } else {
	      res.status(200).end();
	    }
	});
});

module.exports = router;