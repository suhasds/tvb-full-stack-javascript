const http = require("http");

// write code to get the contents of a JSON file

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // set the appropriate header
  });
  
  // send json response
  res.end();
});

server.listen(3000, () => {
  console.log("Started server on http://localhost:3000.");
});
