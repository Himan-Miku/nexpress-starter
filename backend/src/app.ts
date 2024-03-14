import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorfn from "./middlewares/error";

let app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.use("/api", route1, route2);
app.use(errorfn);

export default app;
