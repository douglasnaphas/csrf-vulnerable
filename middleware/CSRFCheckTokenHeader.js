const logReceipt = require("./logReceipt");

const funcArray = [
  function(req, res, next) {
    const vmortCSRFTokenFromHeader = req.get("Vmort-CSRF-Token");
    const vmortCSRFTokenFromCookie = req.cookies["CSRF-Token"];
    if (vmortCSRFTokenFromHeader === vmortCSRFTokenFromCookie) {
      return next();
    }
    const message = `CSRF token header/cookie comparison failed`;
    console.log(message);
    return res.status(403).send({ error: message });
  },
  function(req, res, next) {
    if (req.query.token_valid === "true") {
      return next();
    }
    const message = `CSRF token header check failed`;
    console.log(message);
    return res.status(403).send({ error: message });
  },
  logReceipt,
  (req, res, next) => res.send({ Output: "request accepted" })
];

module.exports = funcArray;
