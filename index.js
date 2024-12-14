const http = require("node:http");
const fs = require("node:fs/promises");

const port = 8000;

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile("./html/index.html");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } catch (err) {
      console.log(err);
    }
  })
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
