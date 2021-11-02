const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("workingo");
});

app.listen(3000);
