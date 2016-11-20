"use strict";

const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  if (req.url == '/') {
    res.writeHead(200, {"Content-Type": 'text/html'})
    res.end("server is an <strong>events emmiter</strong>, 'request' is a event name.")
  } else if (req.url == '/goodbye') {
    res.writeHead(200, {"Content-Type": 'text/html'})
    res.end("goodbye <strong>world</strong>")
  }
})

server.listen(3000, ()=> {
  console.log('server started!')
})
