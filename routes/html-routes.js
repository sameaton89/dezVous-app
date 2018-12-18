// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) 
{
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create.html"));
  });

  app.get("/account", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/account.html"));
  })

  app.get("/contactus", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contactus.html"))
  })

  // app.get("/api/all", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  

};