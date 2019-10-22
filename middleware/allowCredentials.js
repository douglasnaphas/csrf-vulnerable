const allowCredentials = (req, res, next) => {
  res.set({'Access-Control-Allow-Credentials': "true"});
  next();
}

module.exports = allowCredentials;