var express = require("express");
var routesContact = require("./routes/contact");
var routes = require("./routes/");
var cors = require("cors");
var path = require("path");
var _ = require("underscore");
global.appRoot = path.resolve(__dirname);
var app = express();

// Removes extra spaces from strings at the beginning and at the end
var trimmer = function (req, res, next) {
  req.body = _.object(
    _.map(req.body, function (value, key) {
      return [key, typeof value === "string" ? value.trim() : value];
    })
  );
  next();
};
// use cors for requisitations
app.use(cors());
// use json to requisitations
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(trimmer);
// Add single routes
app.use("/", routes);
// add routes for contacts api.
app.use("/contacts", routesContact);
// Listem server in localhost:3000
app.listen(3000);
