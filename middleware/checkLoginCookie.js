const funcArray = [
  function(req, res, next) {
    if (
      !req.cookies ||
      !req.cookies["Login-Token"] ||
      !/[A-Z]{6}/.test(req.cookies["Login-Token"])
    ) {
      console.log("no 6-letter Login-Token cookie received, bad request");
      res.sendStatus(401);
    }
  }
];

module.exports = funcArray;
