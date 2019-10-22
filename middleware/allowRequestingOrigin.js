const allowRequestingOrigin = (req, res, next) => {
  res.set({'Access-Control-Allow-Origin': req.get("origin")});
  next();
}

module.exports = allowRequestingOrigin;