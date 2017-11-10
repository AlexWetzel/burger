var mysql = require ("mysql");
// local database
var connection = mysql.createConnection({
	host:"localhost",
	port: 3306,
	user: "root",
	password: "RootPass",
	database: "burgers_db"
});

// var connection = mysql.createConnection({
// 	host:"us-cdbr-iron-east-05.cleardb.net",
// 	user: "b0cd511d0a0128",
// 	password: "42dd8458",
// 	database: "heroku_87b9b984be4408b"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;