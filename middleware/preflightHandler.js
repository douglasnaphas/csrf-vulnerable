const preflightHandler = (req, res, next) => {
  return res.sendStatus(204);
};
const funcArray = [preflightHandler];
module.exports = funcArray;
