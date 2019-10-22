const allowAllOrigins = require("./allowAllOrigins");
const allowRequestingOrigin = require("./allowRequestingOrigin");
const allowCredentials = require("./allowCredentials");

const funcArray = [
  allowCredentials,
  allowRequestingOrigin,
  function(req, res, next) {
    console.log("this was written to stdout abcXYZ123jj");
    next();
  },
  function(req, res, next) {
    res.cookie(
      "Login-Token",
      (() => {
        let cook = "";
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < 6; i++) {
          cook += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }
        return cook;
      })()
    );
    next();
  },
  function(req, res) {
    res.send({ Output: "You have received a cookie" });
  }
];

module.exports = funcArray;
