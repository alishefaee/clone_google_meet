import { Server, Socket } from 'socket.io'
import Cache from '../cacheHelper'
import { TMeeting } from '../types'

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
            sockId: socket.id,
            vid,
            aud
          }
        ]
      }

      Cache.set<TMeeting>(id, newMeeting)

      socket.join(id)
      fn({ status: 'SUCCESS', mgs: 'success', data: newMeeting })
    })

    type TJoinMeeting = { roomId: string }
    socket.on('join-meeting-req', ({ roomId }: TJoinMeeting, fn: Function) => {
      console.log('join meeting req')
      const meeting = Cache.get<TMeeting>(roomId)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const creator = meeting.participants.find((ptc) => ptc.username == meeting.creator)!

      socket.to(creator.sockId).emit('join-req', {
        roomId,
        username: socket.handshake.auth.username
      })
      fn({ status: 'SUCCESS', mgs: 'join request sent', data: {} })

      // meeting.participants.push({
      //   username: socket.handshake.auth.username,
      //   sockId: socket.id,
      //   vid,
      //   aud
      // })
      //
      // Cache.set(id, meeting)
      //
      // socket.join(id)
      // fn({ status: 'SUCCESS', mgs: 'success', data: meeting })
    })

    socket.on('disconnect', (data: any, fn: Function) => {
      console.log('Client disconnected:', socket.id)
    })
  }
}
