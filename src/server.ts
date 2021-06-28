import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import helmet from "helmet";

import "reflect-metadata";
import "./database";

import { router } from "./routes";

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
