//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Use the environment port or 3000
var port = process.env.PORT || 3000;

var app = express();

//Serve static files from the 'public' directory
app.use(express.static("public"));

//Use body parser
app.use(bodyParser.urlencoded({ extended: false }));

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Require routes
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);
