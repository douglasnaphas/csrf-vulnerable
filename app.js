var express = require("express");
var app = express();
const getLoginCookie = require("./middleware/getLoginCookie");
const getCSRFCookie = require("./middleware/getCSRFCookie");

app.get("/", function(req, res) {
  res.send({
    Output: "Hello World!"
  });
});

app.post("/", function(req, res) {
  res.send({
    Output: "Hello World!"
  });
});

app.get("/login-cookie", getLoginCookie);

app.get("/csrf-cookie", getCSRFCookie);

app.get("/cookie", getLoginCookie);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
