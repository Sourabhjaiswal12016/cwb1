require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/twitter", (req, res) => {
  res.send("I am on the Twitter Page");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>I am on the Youtube Page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${port} `);
});
