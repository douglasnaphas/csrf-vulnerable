var express = require("express");
const cookieParser = require('cookie-parser')
const getLoginCookie = require("./middleware/getLoginCookie");
const getCSRFCookie = require("./middleware/getCSRFCookie");
const postCookiesNoCSRFToken = require("./middleware/postCookiesNoCSRFToken");

var app = express();

app.use(cookieParser());

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

app.post("/cookies-no-csrf-token", postCookiesNoCSRFToken);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
