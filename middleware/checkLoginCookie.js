const funcArray = [
  function(req, res, next) {
    if (
      !req.cookies ||
      !req.cookies["Login-Token"] ||
      !/[A-Z]{6}/.test(req.cookies["Login-Token"])
    ) {
      console.log("no 6-letter Login-Token cookie received, bad request");
      return res.status(401).send({ error: "you need a valid login cookie" });
    }
    return next();
  }
];

module.exports = funcArray;
