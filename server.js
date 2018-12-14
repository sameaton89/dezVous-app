//DEPENDENCIES
//--------------------------------------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");

//SET UP EXPRESS
//--------------------------------------------------------------------------------
var app = express();
var PORT = process.env.PORT || 8080;

//REQUIRE MODEL FOR SYNCING
//--------------------------------------------------------------------------------
var db = require("./models");

//SET UP DATA PARSING
//--------------------------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//STATIC DIRECTORY
//--------------------------------------------------------------------------------
app.use(express.static("./public"));

//ROUTES
//--------------------------------------------------------------------------------
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//SYNC SEQUELIZE MODELS AND START EXPRESS APP
//--------------------------------------------------------------------------------
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App is listening on PORT " + PORT);
    });
});
