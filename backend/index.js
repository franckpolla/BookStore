import express from "express";
import mongoose from "mongoose";
import BookRouter from "../backend/routes/bookRoute.js";

import { Book } from "./model/bookModel.js";

import cors from "cors";

import { Port, ConnectionString } from "./config.js";
const app = express();

app.use(cors());

// app.use(
//   cors({
//     origin: "http://loacalhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
app.use(express.json());
app.use("/books", BookRouter);

mongoose
  .connect(ConnectionString)
  .then(() => {
    console.log("App connected to the database");
    app.listen(Port, () => console.log(`Server is running on port ${Port}`));
  })
  .catch((error) => {
    console.error(error.message);
  });
