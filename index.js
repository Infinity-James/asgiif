const http = require("http");

//  use the port 3000 because that's what people do
const port = 3000;

/**
 *  This is the function that will be called when the server is hit.
 **/
function handleRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}

var server = http.createServer(handleRequest));

server.listen(port, 'localhost');
