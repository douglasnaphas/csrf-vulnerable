const logReceipt = require("./logReceipt");

const funcArray = [
  function(req, res, next) {
    if (
      req.origin === req.hostname ||
      /(https:\/\/)?(www[.])?vulnemort[.]com/.test(req.origin)
    ) {
      return next();
    }
    const message = `standard header check failed, origin ${req.origin} vs host ${req.host}`;
    console.log(message);
    return res.status(403).send({ error: message });
  },
  logReceipt,
  (req, res, next) => res.send({ Output: "request accepted" })
];

module.exports = funcArray;
