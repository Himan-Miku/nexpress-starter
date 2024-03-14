import { Request, Response, NextFunction } from "express";
let catchAsyncError =
  (thefunc: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(thefunc(req, res, next)).catch(next);
  };

export default catchAsyncError;
