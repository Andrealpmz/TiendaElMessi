const express = require("express");
const app = express();

import { connectDB } from "./database";

app.get("/", (req, res) => {
  connectDB();
  res.send("workingo");
});

app.listen(3000);
