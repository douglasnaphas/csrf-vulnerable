const funcArray = [
  (req, res, next) => {
    res.set({ "Access-Control-Allow-Headers": "Authorization, Content-Type" });
    return next();
  }
];
module.exports = funcArray;
