const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split("")[2];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) res.status(403).json({ error: "Token is not valid!" })
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You're not authenticated");
  }
}

module.exports = verify;
