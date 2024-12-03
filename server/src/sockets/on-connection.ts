import { Server, Socket } from 'socket.io'
import Cache from '../cacheHelper'

export function onConnection(io: Server) {
  return async (socket: Socket) => {
    console.log('client connected')
    socket.on('candidate', (candidate) => {
      console.log('Candidate received:', candidate)
      socket.broadcast.emit('candidate', candidate)
    })

    socket.on('offer', ({ offer, meetingId }) => {
      console.log('Offer received:', offer)
      socket.to(meetingId).emit('offer', { offer, meetingId })
    })

    socket.on('answer', ({ answer, meetingId }) => {
      console.log('Answer received:', answer)
      socket.to(meetingId).emit('answer', answer)
    })

    type TCreateMeeting = { id: string; aud: boolean; vid: boolean }
    socket.on('create-meeting', ({ id, vid, aud }: TCreateMeeting, fn: Function) => {
      console.log('create meeting')
      const newMeeting = {
        creator: socket.handshake.auth.username,
        participants: [
          {
            username: socket.handshake.auth.username,
            vid,
            aud
          }
        ]
      }

      Cache.set(id, newMeeting)

      socket.join(id)
      fn({ status: 'SUCCESS', mgs: 'success', data: newMeeting })
    })

    type TJoinMeeting = { id: string; aud: boolean; vid: boolean }
    socket.on('create-meeting', ({ id, vid, aud }: TJoinMeeting, fn: Function) => {
      console.log('create-meeting')
      const meeting: any = Cache.get(id)
      meeting.participants.push({
        username: socket.handshake.auth.username,
        vid,
        aud
      })
      Cache.set(id, meeting)

      socket.join(id)
      fn()
    })

    socket.on('disconnect', (data: any, fn: Function) => {
      console.log('Client disconnected:', socket.id)
    })
  }
}
