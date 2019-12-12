const logReceipt = require("./logReceipt");

const funcArray = [
  function(req, res, next) {
    const o = req.get("origin");
    const h = req.hostname;
    if (o === h || /(https:\/\/)?(www[.])?vulnemort[.]com/.test(o)) {
      return next();
    }
    const message = `standard header check failed, origin ${o} vs host ${h}`;
    console.log(message);
    return res.status(403).send({ error: message });
  },
  logReceipt,
  (req, res, next) => res.send({ Output: "request accepted" })
];

module.exports = funcArray;
