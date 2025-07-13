import constants from "../constants.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; // Set default status code to 500
  res.status(statusCode);

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Error",
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });

    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });

    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });

    case constants.INTERNAL_SERVER_ERROR:
      res.json({
        title: "Internal Server Error",
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });

    default:
      console.log("No error All good");
      break;
  }
  next(); // Call the next middleware in the stack if any
};

export default errorHandler;
