require("newrelic");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Route hit");
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server started");
});
 