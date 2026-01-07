import jwt from "jsonwebtoken";
import { errorhandle } from "./Error.js";

export const verifyuser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorhandle(401, "Unauthorized"));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return next(errorhandle(401, "Unauthorized"));
    }

    req.user = user;
    next();
  });
};

export const adminuser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorhandle(401, "Unauthorized"));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return next(errorhandle(401, "Unauthorized"));
    }

    req.user = user;
    console.log(req.user.role)
    console.log(req.user)
     if (req.user && req.user.role === "admin") {
    next();
  } else {
    return next(errorhandle(403, "Access Denied, Admin only!"));
  }
  });
 
};
