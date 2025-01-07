import { Socket } from 'socket.io'
export type TSocket = Socket & {
  username ? : string
}
export type TMeeting = {
  creator: string
  participants: { username: string;sockId: string;vid: boolean;aud: boolean } []
}
