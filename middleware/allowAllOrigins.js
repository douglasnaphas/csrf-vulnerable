const allowAllOrigins = (req, res, next) => {
  res.set({'Access-Control-Allow-Origin': '*'});
  return next();
}

module.exports = allowAllOrigins;