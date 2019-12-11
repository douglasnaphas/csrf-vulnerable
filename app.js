var express = require("express");
const cookieParser = require("cookie-parser");
const getLoginCookie = require("./middleware/getLoginCookie");
const getCSRFCookie = require("./middleware/getCSRFCookie");
const postCookiesNoCSRFToken = require("./middleware/postCookiesNoCSRFToken");
const doNothing = require("./middleware/doNothing");

var app = express();

app.use(cookieParser());

app.get(["/", "/api"], function(req, res) {
  res.send({
    Output: "Hello World!!"
  });
});

app.post(["/", "/api"], function(req, res) {
  res.send({
    Output: "Hello World!"
  });
});

app.get(/\/(api\/)?do-nothing/, doNothing);
app.post(/\/(api\/)?do-nothing/, doNothing);

app.get(/\/(api\/)?login-cookie/, getLoginCookie);

app.get(/\/(api\/)?csrf-cookie/, getCSRFCookie);

app.get(/\/(api\/)?cookie/, getLoginCookie);

app.post("/cookies-no-csrf-token", postCookiesNoCSRFToken);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
