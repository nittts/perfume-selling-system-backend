import "express-async-errors";
import express, { Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import helmet from "helmet";

import rateLimiterMiddleware from "./middlewares/rateLimiter.middleware";
import { errorHandling } from "./middlewares/asyncErrors.middleware";
import indexRouter from "./routes/index.routes";

config();
const app = express();

// Parse body from requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limit requests
app.use(rateLimiterMiddleware);

// Cors protection and headers
app.use(cors());

// Async error Handling
app.use(errorHandling);

// Helmet app!
app.use(helmet());

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running!");
});

app.use("/api/v1", indexRouter);

export default app;
