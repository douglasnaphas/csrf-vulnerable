/**
 * Middleware setting res.locals.samesite to true if and only if req.query
 * .samesite is "true"
 */
const setSameSite = (req, res, next) => {
  if(req && req.query && req.query.samesite && req.query.samesite === "true") {
    res.locals.samesite = true;
  } else {
    res.locals.samesite = false;
  }
  return next();
}

module.exports = setSameSite;