const http = require("node:http");
const fs = require("node:fs/promises");

const port = 8080;

http
  .createServer(async (req, res) => {
    if (req.url == "/index" || req.url == "/") {
      try {
        const data = await fs.readFile("./html/index.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (err) {
        console.log(err);
      }
    } else if (req.url == "/about" || req.url == "./about.html") {
      try {
        const data = await fs.readFile("./html/about.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (err) {
        console.log(err);
      }
    } else if (req.url == "/contact-me" || req.url == "./contact-me.html") {
      try {
        const data = await fs.readFile("./html/contact-me.html");
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(data);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const data = await fs.readFile("./html/404.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (err) {
        console.log(err);
      }
    }
  })
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
