import http from 'http'
import https from 'https'
import fs from 'fs'

import { socketServer } from './init/socket'
import { app } from './init/app'
import path from 'path'

const options = {
  key: fs.readFileSync(path.join(__dirname, '../ssl/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../ssl/cert.pem'))
}

const server = process.env.NODE_ENV === 'production' ? https.createServer(options, app) : http.createServer(app)

const port = 4000
console.log('Create IO')
const io = socketServer(server)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = 'Port ' + port
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port
  console.log('listening on ' + bind)
}

export { server, io }
