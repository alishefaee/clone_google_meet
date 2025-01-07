import { TSocket } from '../types'
type Next = (err ? : Error) => void
export function authSocketMid(socket: TSocket, next: Next) {
  console.log('socket middleware')
  console.log(socket.handshake.auth.username)
  const username = socket.handshake.auth.username as string
  console.log('usernamee:', username)
  if (!username) return next(new Error('username not found'))
  console.log('Auth success')
  socket.username = username
  next()
}
