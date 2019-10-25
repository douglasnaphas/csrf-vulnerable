const allowRequestingOrigin = require("./allowRequestingOrigin");
const allowCredentials = require("./allowCredentials");
const setSameSite = require("./setSameSite");

const funcArray = [
  allowCredentials,
  allowRequestingOrigin,
  setSameSite,
  function(req, res, next) {
    const cookieOptions = res.locals.samesite ? 
      {sameSite: "lax"} : {};
    res.cookie(
      "CSRF-Token",
      (() => {
        let cook = "";
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < 6; i++) {
          cook += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }
        return cook;
      })(),
      cookieOptions
    );
    return next();
  },
  function(req, res) {
    return res.send({ Output: "You have received a cookie" });
  }
];

module.exports = funcArray;
