const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, Appsynth!");
});

server.listen(3000);
