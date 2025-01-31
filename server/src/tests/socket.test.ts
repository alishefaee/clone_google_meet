import { beforeAll, afterAll, describe, it, expect } from 'vitest'
import { createServer } from 'node:http'
import { io as ioc, type Socket as ClientSocket } from 'socket.io-client'
import { Server, type Socket as ServerSocket } from 'socket.io'

function waitFor(socket: ServerSocket | ClientSocket, event: string) {
  return new Promise((resolve: any) => {
    socket.once(event, resolve)
  })
}

describe('socket io', () => {
  let io: Server
  let serverSocket: ServerSocket
  let clientSocket: ClientSocket
  const port = 4000
  beforeAll(() => {
    return new Promise((resolve: any) => {
      const httpServer = createServer()
      io = new Server(httpServer)
      httpServer.listen(port, () => {
        clientSocket = ioc(`http://localhost:${port}`)
        io.on('connection', (socket) => {
          serverSocket = socket
        })
        clientSocket.on('connect', resolve)
      })
    })
  })
  afterAll(() => {
    io.close()
    clientSocket.disconnect()
  })
  // it('on-create-meeting', () => {
  //   return new Promise((resolve) => {
  //     clientSocket.on('hello', (arg) => {
  //       expect(arg).to.equal('world')
  //       resolve(undefined)
  //     })
  //     serverSocket.emit('hello', 'world')
  //   })
  // })
  // it('should work with an acknowledgement', () => {
  //   return new Promise((resolve) => {
  //     serverSocket.on('hi', (cb) => {
  //       cb('hola')
  //     })
  //     clientSocket.emit('hi', (arg: any) => {
  //       expect(arg).toEqual('hola')
  //       resolve(undefined)
  //     })
  //   })
  // })
  //
  // it('should work with emitWithAck()', async () => {
  //   serverSocket.on('foo', (cb) => {
  //     cb('bar')
  //   })
  //   const result = await clientSocket.emitWithAck('foo')
  //   expect(result).toEqual('bar')
  // })
  //
  // it('should work with waitFor()', () => {
  //   clientSocket.emit('baz')
  //
  //   return waitFor(serverSocket, 'baz')
  // })
})
