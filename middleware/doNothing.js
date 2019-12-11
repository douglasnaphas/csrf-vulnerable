const allowCredentials = require("./allowCredentials");
const logReceipt = require("./logReceipt");

const funcArray = [
  allowCredentials,
  logReceipt,
  function(req, res) {
    return res.send({ Output: "Nothing done" });
  }
];

module.exports = funcArray;
