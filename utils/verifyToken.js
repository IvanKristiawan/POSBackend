const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error.js");

const verifyUser = (req, res, next) => {
  const token = req.body.token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
  });

  if (req.params.length === 0) {
    if (req.params.id === req.user.id) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } else {
    if (req.body.id === req.user.id) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  }
};

const verifyUserSPV = (req, res, next) => {
  const token = req.body.token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
  });

  if (req.params.length === 0) {
    if (req.body.tipeAdmin === "SPV") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } else {
    if (req.body.tipeAdmin === "SPV") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  }
};

const verifyUserKSR = (req, res, next) => {
  const token = req.body.token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
  });

  if (req.params.length === 0) {
    if (req.params.id === req.user.id && req.body.tipeUser === "KSR") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } else {
    if (req.body.id === req.user.id && req.body.tipeUser === "KSR") {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  }
};

module.exports = {
  verifyUser,
  verifyUserSPV,
  verifyUserKSR,
};
