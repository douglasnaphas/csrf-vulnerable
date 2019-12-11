const logReceipt = require("./logReceipt");

const funcArray = [
  function(req, res, next) {
    if (
      req.origin === req.hostname ||
      /(https:\/\/)?(www[.])?vulnemort[.]com/.test(req.origin)
    ) {
      return next();
    }
    return res.status(403).send({ error: "standard header check failed" });
  },
  logReceipt,
  (req, res, next) => res.send({ Output: "request accepted" })
];

module.exports = funcArray;
