import "reflect-metadata";
import express from "express";

import { AddressInfo } from "net";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import "./database";
import { routes } from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(routes);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Serving running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure starting server`);
  }
});
