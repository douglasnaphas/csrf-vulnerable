var express = require('express');
var app = express();
const getLoginCookie = require("./middleware/getLoginCookie")

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get("/login-cookie", getLoginCookie);

// app.get("/csrf-cookie", getCsrfCookie);

app.get("/cookie", getLoginCookie);


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
;