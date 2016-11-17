"use strict";

const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.writeHead(200, {"Content-Type": 'text/plain'})
  res.end("server is an events emmiter, 'request' is a event name.")
})

server.listen(3000, ()=> {
  console.log('server started!')
})
