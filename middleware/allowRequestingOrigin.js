const allowRequestingOrigin = (req, res, next) => {
  res.set({'Access-Control-Allow-Origin': req.get("origin")});
  return next();
}

module.exports = allowRequestingOrigin;