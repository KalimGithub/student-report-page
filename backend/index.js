import express from "express";
import clc from "cli-color";
import cors from "cors";
import { reportData } from "./data/report.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.get("/", (req, res) => {
  res.json("home api is running");
});

app.get("/api/report", (req, res) => {
  console.log(reportData);
  res.json(reportData);
});

app.listen(PORT, () => {
  console.log(
    clc.underline.bold.green(`server is running on http://localhost:${PORT}`)
  );
});
