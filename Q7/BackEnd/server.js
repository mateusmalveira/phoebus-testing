var express = require("express");
var routesContact = require("./routes/contact");
var routes = require("./routes/");
var cors = require("cors");
var path = require("path");
var _ = require("underscore");
global.appRoot = path.resolve(__dirname);
var app = express();

// Trim Body
var trimmer = function (req, res, next) {
  req.body = _.object(
    _.map(req.body, function (value, key) {
      return [key, typeof value === "string" ? value.trim() : value];
    })
  );
  next();
};
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(trimmer);
app.use("/", routes);
app.use("/contacts", routesContact);

app.listen(3000);
