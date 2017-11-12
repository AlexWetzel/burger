//Dependency
var connection = require("./connection.js");


var orm = {
	//Selects all entries in the database
	selectAll: function(table, cb) {

		var queryString = "SELECT * FROM " + table;		
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	//Inserts a new row into the
	insertOne: function(table, colName, value, cb) {
		var queryString = "INSERT INTO " + table + " (" + colName + ") VALUE ('" + value + "');";

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	//Updates a value in a selected row
	updateOne: function(table, value, condition, cb){
		var queryString = "UPDATE " + table;
		queryString += " SET "
		queryString += value
		queryString += " WHERE "
		queryString += condition + ";";

		connection.query(queryString, function(err, result) {
		    if (err) throw err;
		    cb(result);
		});
	},
};

module.exports = orm;