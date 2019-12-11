const allowRequestingOrigin = require("./allowRequestingOrigin");
const allowCredentials = require("./allowCredentials");
const logReceipt = require("./logReceipt");
const logCookies = require("./logCookies");

const funcArray = [
  allowCredentials,
  allowRequestingOrigin,
  logReceipt,
  logCookies,
  function(req, res) {
    return res.send({ Output: "Nothing done" });
  }
];

module.exports = funcArray;
