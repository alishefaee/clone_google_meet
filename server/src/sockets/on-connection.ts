import { Server, Socket } from 'socket.io'
import Cache from '../cacheHelper'
import { TMeeting } from '../types'
export function onConnection(io: Server) {
  return async (socket: Socket) => {
    console.log('client connected')
    socket.on('candidate', ({ candidate, roomId }, fn: Function) => {
      const meeting = Cache.get < TMeeting > (roomId)
      console.log('candidate meeting:', meeting)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const username = socket.handshake.auth.username
      const user = meeting.participants.find((ptc) => ptc.username == username) !
        console.log('Candidate received:', candidate)
      socket.to(roomId).except(user.sockId).emit('candidate', { candidate, username })
    })
    socket.on('offer', ({ offer, roomId, targetUsername }, fn: Function) => {
      console.log('Offer received:', targetUsername)
      const meeting = Cache.get < TMeeting > (roomId)
      console.log('meeting found:', roomId, meeting)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const targetUser = meeting.participants.find((ptc) => ptc.username == targetUsername) !
        console.log('target user found:', targetUser)
      const targetSocket = io.sockets.sockets.get(targetUser.sockId)
      if (!targetSocket) {
        fn({ status: 'ERROR', mgs: 'No socket found', data: {} })
        return
      }
      console.log('target socket found')
      targetSocket.emit('offer', {
          offer,
          roomId,
          username: socket.handshake.auth.username
        }
        as any)
      fn({ status: 'SUCCESS', mgs: 'join request sent', data: {} })
      // socket.to(meetingId).emit('offer', { offer, meetingId })
    })
    socket.on('answer', ({ answer, roomId, username }, fn: Function) => {
      console.log('Answer received:', answer)
      const meeting = Cache.get < TMeeting > (roomId)
      console.log('meeting:', roomId)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const targetUser = meeting.participants.find((ptc) => ptc.username == username) !
        const targetSocket = io.sockets.sockets.get(targetUser.sockId)
      if (!targetSocket) {
        fn({ status: 'ERROR', mgs: 'No socket found', data: {} })
        return
      }
      targetSocket.emit('answer', {
          answer,
          roomId,
          username: socket.handshake.auth.username
        }
        as any)
    })
    socket.on('join-accept', ({ roomId, username, sockId }, fn: Function) => {
      console.log('join meeting accepted')
      const meeting = Cache.get < TMeeting > (roomId)
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
      targetSocket.emit('init-meeting', meeting as any)
      console.log('targetSocket.id:', targetSocket.id)
      io.sockets.adapter.rooms.forEach((members, room) => {
        console.log(`Room ${room}: Members ${Array.from(members.keys())}`)
      })
      socket.to(roomId).except(targetSocket.id).emit('participant-new', newPtc)
      socket.emit('participant-new', newPtc)
      fn({ status: 'SUCCESS', msg: 'added to meeting group', data: meeting })
    })
    type TCreateMeeting = { id: string;aud: boolean;vid: boolean }
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
      Cache.set < TMeeting > (id, newMeeting)
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
      const meeting = Cache.get < TMeeting > (roomId)
      console.log('meet')
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const creator = meeting.participants.find((ptc) => ptc.username == meeting.creator) !
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
