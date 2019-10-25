/**
 * Middleware logging cookies to stdout.
 */
const logCookies = (req, res, next) => {
  console.log("Request cookies: ", req.cookies);
  return next();
}
 
module.exports = logCookies;