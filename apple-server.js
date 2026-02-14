const http = require("http");
const fs = require("fs");
let mimeType = require("mime-types");

const server = http.createServer((req, res) => {
  requestedUrl = req.url;
  if (requestedUrl === "/") {
    requestedUrl = "/index.html";
  }
  console.log(requestedUrl);
  let type = mimeType.lookup(requestedUrl);

  fs.readFile(`./Apple${requestedUrl}`, (err, content) => {
    if (err) {
      res.writeHead(404, { "content-type":type});
      res.write("<h1>Page Not Found</h1>");
      res.end();
    } else {
      res.writeHead(200, {"content-type":type});
      res.write(content);
      res.end();
    }
  });
});

server.listen(4005, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running on port 4005");
});
