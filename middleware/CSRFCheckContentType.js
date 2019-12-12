const logReceipt = require("./logReceipt");

const funcArray = [
  function(req, res, next) {
    const contentType = req.get("Content-Type");
    if (/application\/JSON/i.test(contentType)) {
      console.log(`found acceptable Content-Type of ${contentType}`);
      return next();
    }
    const message = `unacceptable Content-Type ${contentType}`;
    console.log(message);
    return res.status(403).send({ error: message });
  },
  logReceipt,
  (req, res, next) => res.send({ Output: "request accepted" })
];

module.exports = funcArray;
