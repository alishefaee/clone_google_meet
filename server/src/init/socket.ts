import { Server } from 'socket.io'
import http from 'http'
import { authSocketMid } from '../middlewares/auth.middleware'
import { onConnection } from '../sockets/on-connection'

export function socketServer(server: http.Server) {
  console.log('socketServer')
  const io = new Server(server, {
    cors: {
      origin: '*'
    }
  })

  console.log('socketServer2')
  io.use(authSocketMid)
  console.log('socketServer3')
  io.on('connection', onConnection(io))
  console.log('socketServer4')
  return io
}
