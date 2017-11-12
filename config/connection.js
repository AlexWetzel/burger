//Dependency
var mysql = require ("mysql");
// local database =======================================
var connection = mysql.createConnection({
	host:"localhost",
	port: 3306,
	user: "root",
	password: "RootPass",
	database: "burgers_db"
});
//Heroku connection removed

//Database connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export the connection
module.exports = connection;