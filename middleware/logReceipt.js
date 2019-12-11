const funcArray = [
  function(req, res, next) {
    console.log(`${req.method} received at ${req.path}`);
    return next();
  }
];

module.exports = funcArray;
