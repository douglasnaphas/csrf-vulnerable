const allowRequestingOrigin = (req, res, next) => {
  const o = req.get("origin");
  if (!/^https:\/\/(www)?vulnemort.com$/.test(o)) {
    console.log(`disallowing non-whitelisted origin ${o}`);
    return next();
  }
  res.set({ "Access-Control-Allow-Origin": o });
  console.log(`allowing whitelisted origin ${o}`);
  return next();
};

module.exports = allowRequestingOrigin;
