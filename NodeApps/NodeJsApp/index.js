const http = require('http');
const fs = require('fs');
const path = require('path');
const { dirname } = require('path/posix');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {

  console.log("req ", req.url, req.method, req.httpVersion, req.headers.host);
  res.statusCode = 200;

  const fileName = 'Readme.txt';
  let filePath = path.join(__dirname, 'Readme.txt');
  let stat = fs.statSync(filePath);

  res.writeHead(200, {
    "Content-Type": "application/octet-stream",
    "Content-Disposition": "attachment; filename=" + fileName
  });

  fs.createReadStream(filePath).pipe(res);
  // res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World! \n' + port);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});