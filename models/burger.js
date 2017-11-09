var orm = require("../config/orm.js");

var burger = {
	select: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		})
	},
	insert: function(val, cb){
		orm.insertOne("burgers", val, function(res) {
			cb(res);
		});

	},
	update: function(){

	}
};

module.exports = burger;