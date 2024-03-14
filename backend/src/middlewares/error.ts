import { Request, Response, NextFunction } from "express";
import createError, { HttpError } from "http-errors";

let errorfn = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal error";

  if (err.name == "CastError") {
    const message = "Resource not found .invalid :" + `${err.stack}`;
    // console.log(message);
    // err = new HttpError(message);
  }

  res.status(404).json({
    success: false,
    message: err.message,
  });
};

export default errorfn;
