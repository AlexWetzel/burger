var connection = require("./connection.js");

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table;
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, value, cb) {
		var queryString = "INSERT INTO " + table + " (burger_name) VALUE ('" + value + "');";

		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(table, value, condition, cb){
		var queryString = "UPDATE " + table;
		queryString += " SET "
		queryString += value
		queryString += " WHERE "
		queryString += condition + ";";

		console.log(queryString);

   connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });

	},
};

module.exports = orm;