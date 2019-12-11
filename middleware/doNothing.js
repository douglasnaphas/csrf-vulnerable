const allowRequestingOrigin = require("./allowRequestingOrigin");
const allowCredentials = require("./allowCredentials");
const logReceipt = require("./logReceipt");

const funcArray = [
  allowCredentials,
  allowRequestingOrigin,
  logReceipt,
  function(req, res) {
    return res.send({ Output: "Nothing done" });
  }
];

module.exports = funcArray;
