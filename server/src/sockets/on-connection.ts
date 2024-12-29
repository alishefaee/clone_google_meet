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

    socket.on('offer', ({ offer, roomId, targetUsername }, fn: Function) => {
      console.log('Offer received:', offer)
      const meeting = Cache.get<TMeeting>(roomId)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const targetUser = meeting.participants.find((ptc) => ptc.username == targetUsername)!

      socket.to(targetUser.sockId).emit('offer', {
        offer,
        roomId,
        username: socket.handshake.auth.username
      })
      fn({ status: 'SUCCESS', mgs: 'join request sent', data: {} })
      // socket.to(meetingId).emit('offer', { offer, meetingId })
    })

    socket.on('answer', ({ answer, roomId, username }, fn: Function) => {
      console.log('Answer received:', answer)
      const meeting = Cache.get<TMeeting>(roomId)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const targetUser = meeting.participants.find((ptc) => ptc.username == username)!
      socket.to(targetUser.sockId).emit('answer', {
        answer,
        roomId,
        username: socket.handshake.auth.username
      })
    })

    socket.on('join-accept', ({ roomId, username, sockId }, fn: Function) => {
      console.log('join meeting accepted')
      const meeting = Cache.get<TMeeting>(roomId)
      console.log('meeting:', meeting)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }

      // const caller = meeting.participants.find((pc) => pc.username == username)
      // if (!caller) {
      //   fn({ status: 'ERROR', mgs: 'No caller found', data: {} })
      //   return
      // }

      const newPtc = {
        username,
        sockId,
        vid: false,
        aud: false
      }
      meeting.participants.push(newPtc)

      Cache.set(roomId, meeting)
      console.log('roomId:', roomId, newPtc)

      const targetSocket = io.sockets.sockets.get(sockId)
      if (!targetSocket) {
        fn({ status: 'ERROR', mgs: 'No socket found', data: {} })
        return
      }
      targetSocket.join(roomId)
      // socket.join(roomId)

      io.sockets.adapter.rooms.forEach((members, room) => {
        console.log(`Room ${room}: Members ${Array.from(members.keys())}`)
      })

      targetSocket.emit('init-meeting', meeting as any)
      socket.to(roomId).emit('participant-new', newPtc)
      fn({ status: 'SUCCESS', mgs: 'added to meeting group', data: meeting })
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
      console.log('Cache:', id, Cache.keys())
      socket.join(id)

      io.sockets.adapter.rooms.forEach((members, room) => {
        console.log(`Room ${room}: Members ${Array.from(members.keys())}`)
      })

      fn({ status: 'SUCCESS', mgs: 'success', data: newMeeting })
    })

    type TJoinMeeting = { roomId: string }
    socket.on('join-meeting-req', ({ roomId }: TJoinMeeting, fn: Function) => {
      console.log('join meeting req', roomId, Cache.keys())
      const meeting = Cache.get<TMeeting>(roomId)
      console.log('meet')
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const creator = meeting.participants.find((ptc) => ptc.username == meeting.creator)!

      socket.to(creator.sockId).emit('join-req', {
        roomId,
        username: socket.handshake.auth.username,
        sockId: socket.id
      })
      fn({ status: 'SUCCESS', mgs: 'join request sent', data: {} })
    })

    socket.on('disconnect', (data: any, fn: Function) => {
      console.log('Client disconnected:', socket.id)
    })
  }
}
