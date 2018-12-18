//DEPENDENCIES
//--------------------------------------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");
var server = require('http').Server(app);
var io = require('socket.io')(server);

//SET UP EXPRESS
//--------------------------------------------------------------------------------
var app = express();
var PORT = process.env.PORT || 8080;

//REQUIRE MODEL FOR SYNCING
//--------------------------------------------------------------------------------
var db = require("./models");

//SET UP DATA PARSING
//--------------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//STATIC DIRECTORY
//--------------------------------------------------------------------------------
app.use(express.static("./public"));

//ROUTES
//--------------------------------------------------------------------------------
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//SYNC SEQUELIZE MODELS AND START EXPRESS APP
//--------------------------------------------------------------------------------
db.sequelize.sync({ 
    // force: true 
}).then(function() {
    app.listen(PORT, function() {
        console.log("App is listening on PORT " + PORT);
    });
});
