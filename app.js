var express = require("express");
const cookieParser = require("cookie-parser");
const getLoginCookie = require("./middleware/getLoginCookie");
const getCSRFCookie = require("./middleware/getCSRFCookie");
const postCookiesNoCSRFToken = require("./middleware/postCookiesNoCSRFToken");
const doNothing = require("./middleware/doNothing");
const logCookies = require("./middleware/logCookies");
const checkLoginCookie = require("./middleware/checkLoginCookie");
const allowRequestingOrigin = require("./middleware/allowRequestingOrigin");
const allowWhitelistedOrigins = require("./middleware/allowWhitelistedOrigins");
const preflightHandler = require("./middleware/preflightHandler");
const allowCredentials = require("./middleware/allowCredentials");
const allowHeaders = require("./middleware/allowHeaders");

var app = express();

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

app.use(/\/(api\/)?noxo/, allowWhitelistedOrigins);
app.use(/\/(api\/)?xo/, allowRequestingOrigin);
app.use(/\/.*/, allowCredentials);
app.use(/\/.*/, allowHeaders);
app.options(/\/.*/, preflightHandler);
app.get(/\/(api\/)?login-cookie/, getLoginCookie);
app.get(/\/(api\/)?cookie/, getLoginCookie);
app.use(cookieParser());
app.use(logCookies);
app.use(checkLoginCookie);

app.get(/\/(api\/)?do-nothing/, doNothing);
app.post(/\/(api\/)?do-nothing/, doNothing);

app.get(/\/(api\/)?csrf-cookie/, getCSRFCookie);

app.post("/cookies-no-csrf-token", postCookiesNoCSRFToken);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
