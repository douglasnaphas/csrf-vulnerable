const allowCredentials = (req, res, next) => {
  res.set({'Access-Control-Allow-Credentials': "true"});
  return next();
}

module.exports = allowCredentials;