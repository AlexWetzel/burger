var orm = require("../config/orm.js");

var burger = {
	//Select from the burgers table
	select: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		})
	},
	//insert a burger name into the burgers table
	insert: function(val, cb){
		orm.insertOne("burgers", "burger_name", val, function(res) {
			cb(res);
		});

	},
	//update a value from a row in the burgers table
	update: function(val, condition, cb){
		orm.updateOne("burgers", val, condition, function(res) {
			cb(res);
		})
	}
};

module.exports = burger;