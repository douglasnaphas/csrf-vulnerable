const logCookies = require("./logCookies");
const allowRequestingOrigin = require("./allowRequestingOrigin");
const allowCredentials = require("./allowCredentials");

/**
 * Middleware for a POST endpoint that logs the cookies it receives, with no
 * check for a CSRF token.
 */
const postCookiesNoCSRFToken = [
  allowCredentials,
  allowRequestingOrigin,
  logCookies,
  (req, res, next) => res.send({Output: "cookies logged"})
];

module.exports = postCookiesNoCSRFToken;