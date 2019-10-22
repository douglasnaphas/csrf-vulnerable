const funcArray = [
  function(req, res, next) {
    res.cookie(
      "CSRF-Token",
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
