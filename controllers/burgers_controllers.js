//Dependencies
var express = require("express");
var burger = require("../models/burger.js");
//Initialize the router
var router = express.Router();

//Desplays the main page by default
router.get("/", function(req, res) {
	//Gets all the entries in the database
	burger.select(function(data) {
		var burgObj = {
			burgers: data
		};
		//Renders the page with data from the burgers db
		res.render("index", burgObj);		
	});	
});
//When a new entry is posted
router.post("/api/burgers", function(req, res) {
	//Inserts the entry to the database
	burger.insert(req.body.name, function(result) {
		res.json({ id: result.insertId });
	});
});
//Updates the database entry
router.put("/api/burgers/:id", function(req, res) {
	//Grabs the id from the url
	var id = req.params.id;
	//Condition variable for the update query
	var condition = "id = " + id;
	//'Devoured' will be set to true for the selected entry
	var setValue = "devoured = 1";
	//Update query method
	burger.update(setValue, condition, function(result) {
		 if (result.changedRows == 0) {
     	 // If no rows were changed, then the ID must not exist, so 404
	      return res.status(404).end();
	    } else {
	      res.status(200).end();
	    }
	});
});

module.exports = router;