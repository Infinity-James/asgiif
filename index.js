//  add the necessary requirements
const http = require("http");
const dispatcher = require("httpdispatcher");

//  use the port 3000 because that's what people do
const port = 3000;

/**
 *  This is the function that will be called when the server is hit.
 *
 *  @param  request   The HTTP request received by this server.
 *  @param  response  Our HTTP response to the request.
 **/
function handleRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}

//  create a server for received requests
var server = http.createServer(handleRequest));

//  listen on port 3000 for the incoming requests
server.listen(port, 'localhost');
