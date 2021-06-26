import express from "express";
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

app.listen(port, () => console.log(`Listening on port ${port}`));
