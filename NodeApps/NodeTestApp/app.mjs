import http from 'http'
// require('http')

const server = http.createServer((req, res) => {
    console.log("Req ", req.headers.host, req.httpVersion);
    res.end("hello world! ");
});

server.listen(4242, () => {
    console.log("Server is running...");
});