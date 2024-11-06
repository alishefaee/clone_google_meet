import { describe } from 'vitest'
import { type Socket as ClientSocket } from 'socket.io-client'
import { type Socket as ServerSocket } from 'socket.io'

function waitFor(socket: ServerSocket | ClientSocket, event: string) {
  return new Promise((resolve: any) => {
    socket.once(event, resolve)
  })
}

describe('socket io', () => {})
