const http = require("node:http");
const fs = require("node:fs/promises");
const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.get(["/", "/index"], async (req, res) => {
  try {
    res.set("Content-Type", "text/html");
    const data = await fs.readFile("./html/index.html");
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/about", async (req, res) => {
  try {
    res.set("Content-Type", "text/html");
    const data = await fs.readFile("./html/about.html");
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/contact-me", async (req, res) => {
  try {
    res.set("Content-Type", "text/html");
    const data = await fs.readFile("./html/contact-me.html");
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.use(async (req, res, next) => {
  try {
    res.status(404).set("Content-Type", "text/html");
    const data = await fs.readFile("./html/404.html");
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
