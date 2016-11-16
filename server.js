const net = require('net')
const server = net.createServer((c) => {
  console.log('client connected')
  c.on('data', (d) => {
    console.log('data received: ' + d.toString())
  })
  c.on('end', (d) => {
    console.log('client disconnected')
  })
})

server.listen(3000, ()=> {
  console.log('server started!')
})
