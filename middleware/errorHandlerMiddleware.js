import { StatusCodes } from "http-status-codes";

const errorHandlerMiddlerware = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something went wrong, Try again.";
  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddlerware;
