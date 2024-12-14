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

    socket.on('offer', ({ offer, roomId, username }) => {
      console.log('Offer received:', offer)
      // socket.to(meetingId).emit('offer', { offer, meetingId })
    })

    socket.on('answer', ({ answer, meetingId }) => {
      console.log('Answer received:', answer)
      socket.to(meetingId).emit('answer', answer)
    })

    socket.on('join-accept', ({ roomId }, fn: Function) => {
      console.log('join meeting accepted')
      const meeting = Cache.get<TMeeting>(roomId)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const newPtc = {
        username: socket.handshake.auth.username,
        sockId: socket.id,
        vid: false,
        aud: false
      }
      meeting.participants.push(newPtc)

      Cache.set(roomId, meeting)

      socket.join(roomId)
      socket.to(roomId).emit('participant-new', newPtc)
      fn({ status: 'SUCCESS', mgs: 'added to meeting group', data: newPtc })
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
    })

    socket.on('disconnect', (data: any, fn: Function) => {
      console.log('Client disconnected:', socket.id)
    })
  }
}
