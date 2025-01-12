import { Server, Socket } from 'socket.io'
import Cache from '../cacheHelper'
import { TMeeting } from '../types'

export function onConnection(io: Server) {
  return async (socket: Socket) => {
    console.log('client connected')
    socket.on('candidate', ({ candidate, roomId }, fn: Function) => {
      const meeting = Cache.get<TMeeting>(roomId)
      console.log('candidate meeting:', meeting)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const sender = socket.handshake.auth.username
      const user = meeting.participants.find((ptc) => ptc.username == sender)!
      console.log('Candidate received:', candidate)
      socket.to(roomId).except(user.sockId).emit('candidate', { candidate, sender })
    })
    socket.on('offer', ({ offer, roomId, callee }, fn: Function) => {
      console.log('Offer received:', callee)
      const meeting = Cache.get<TMeeting>(roomId)
      console.log('meeting found:', roomId, meeting)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const calleeUser = meeting.participants.find((ptc) => ptc.username == callee)!
      console.log('target user found:', calleeUser)
      const calleeSocket = io.sockets.sockets.get(calleeUser.sockId)
      if (!calleeSocket) {
        fn({ status: 'ERROR', mgs: 'No socket found', data: {} })
        return
      }
      console.log('callee socket found')
      calleeSocket.emit('offer', {
        offer,
        roomId,
        caller: socket.handshake.auth.username
      } as any)
      fn({ status: 'SUCCESS', mgs: 'join request sent', data: {} })
    })
    socket.on('answer', ({ answer, roomId, caller }, fn: Function) => {
      console.log('Answer received:', answer)
      const meeting = Cache.get<TMeeting>(roomId)
      console.log('meeting:', roomId)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const callerUser = meeting.participants.find((ptc) => ptc.username == caller)!
      const callerSocket = io.sockets.sockets.get(callerUser.sockId)
      if (!callerSocket) {
        fn({ status: 'ERROR', mgs: 'No socket found', data: {} })
        return
      }
      callerSocket.emit('answer', {
        answer,
        roomId,
        callee: socket.handshake.auth.username
      } as any)
    })
    socket.on('join-accept', ({ roomId, caller, sockId }, fn: Function) => {
      console.log('join meeting accepted')
      const meeting = Cache.get<TMeeting>(roomId)
      console.log('meeting:', meeting)
      if (!meeting) {
        fn({ status: 'ERROR', mgs: 'No meeting found', data: {} })
        return
      }
      const newPtc = {
        username: caller,
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
        caller: socket.handshake.auth.username,
        sockId: socket.id
      })
      fn({ status: 'SUCCESS', mgs: 'join request sent', data: {} })
    })
    socket.on('disconnect', (data: any, fn: Function) => {
      console.log('Client disconnected:', socket.id)
    })
  }
}
