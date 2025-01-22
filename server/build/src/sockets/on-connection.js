"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onConnection = onConnection;
const cacheHelper_1 = __importDefault(require("../cacheHelper"));
function onConnection(io) {
    return async (socket) => {
        console.log('client connected');
        socket.on('candidate', ({ candidate, roomId }, fn) => {
            const meeting = cacheHelper_1.default.get(roomId);
            console.log('candidate meeting:', meeting);
            if (!meeting) {
                fn({ status: 'ERROR', mgs: 'No meeting found', data: {} });
                return;
            }
            const sender = socket.handshake.auth.username;
            const user = meeting.participants.find((ptc) => ptc.username == sender);
            console.log('Candidate received:', candidate);
            socket.to(roomId).except(user.sockId).emit('candidate', { candidate, sender });
        });
        socket.on('offer', ({ offer, roomId, callee }, fn) => {
            console.log('Offer received:', callee);
            const meeting = cacheHelper_1.default.get(roomId);
            console.log('meeting found:', roomId, meeting);
            if (!meeting) {
                fn({ status: 'ERROR', mgs: 'No meeting found', data: {} });
                return;
            }
            const calleeUser = meeting.participants.find((ptc) => ptc.username == callee);
            console.log('target user found:', calleeUser);
            const calleeSocket = io.sockets.sockets.get(calleeUser.sockId);
            if (!calleeSocket) {
                fn({ status: 'ERROR', mgs: 'No socket found', data: {} });
                return;
            }
            console.log('callee socket found');
            calleeSocket.emit('offer', {
                offer,
                roomId,
                caller: socket.handshake.auth.username
            });
            fn({ status: 'SUCCESS', mgs: 'join request sent', data: {} });
        });
        socket.on('answer', ({ answer, roomId, caller }, fn) => {
            console.log('Answer received:', answer);
            const meeting = cacheHelper_1.default.get(roomId);
            console.log('meeting:', roomId);
            if (!meeting) {
                fn({ status: 'ERROR', mgs: 'No meeting found', data: {} });
                return;
            }
            const callerUser = meeting.participants.find((ptc) => ptc.username == caller);
            const callerSocket = io.sockets.sockets.get(callerUser.sockId);
            if (!callerSocket) {
                fn({ status: 'ERROR', mgs: 'No socket found', data: {} });
                return;
            }
            callerSocket.emit('answer', {
                answer,
                roomId,
                callee: socket.handshake.auth.username
            });
        });
        socket.on('join-accept', ({ roomId, caller, sockId }, fn) => {
            console.log('join meeting accepted');
            const meeting = cacheHelper_1.default.get(roomId);
            console.log('meeting:', meeting);
            if (!meeting) {
                fn({ status: 'ERROR', mgs: 'No meeting found', data: {} });
                return;
            }
            const newPtc = {
                username: caller,
                sockId,
                vid: false,
                aud: false
            };
            meeting.participants.push(newPtc);
            cacheHelper_1.default.set(roomId, meeting);
            console.log('roomId:', roomId, newPtc);
            const targetSocket = io.sockets.sockets.get(sockId);
            if (!targetSocket) {
                fn({ status: 'ERROR', mgs: 'No socket found', data: {} });
                return;
            }
            targetSocket.join(roomId);
            targetSocket.emit('init-meeting', meeting);
            console.log('targetSocket.id:', targetSocket.id);
            io.sockets.adapter.rooms.forEach((members, room) => {
                console.log(`Room ${room}: Members ${Array.from(members.keys())}`);
            });
            socket.to(roomId).except(targetSocket.id).emit('participant-new', newPtc);
            socket.emit('participant-new', newPtc);
            fn({ status: 'SUCCESS', msg: 'added to meeting group', data: meeting });
        });
        socket.on('create-meeting', ({ id, vid, aud }, fn) => {
            console.log('create meeting');
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
            };
            cacheHelper_1.default.set(id, newMeeting);
            console.log('Cache:', id, cacheHelper_1.default.keys());
            socket.join(id);
            io.sockets.adapter.rooms.forEach((members, room) => {
                console.log(`Room ${room}: Members ${Array.from(members.keys())}`);
            });
            fn({ status: 'SUCCESS', mgs: 'success', data: newMeeting });
        });
        socket.on('join-meeting-req', ({ roomId }, fn) => {
            console.log('join meeting req', roomId, cacheHelper_1.default.keys());
            const meeting = cacheHelper_1.default.get(roomId);
            console.log('meet');
            if (!meeting) {
                fn({ status: 'ERROR', mgs: 'No meeting found', data: {} });
                return;
            }
            const creator = meeting.participants.find((ptc) => ptc.username == meeting.creator);
            socket.to(creator.sockId).emit('join-req', {
                roomId,
                caller: socket.handshake.auth.username,
                sockId: socket.id
            });
            fn({ status: 'SUCCESS', mgs: 'join request sent', data: {} });
        });
        socket.on('msg-new', ({ msg, roomId }, fn) => {
            console.log('on message:', msg, roomId);
            io.to(roomId).emit('msg-new', {
                username: socket.handshake.auth.username,
                msg,
                date: new Date()
            });
            fn();
        });
        socket.on('disconnect', (data, fn) => {
            console.log('Client disconnected:', socket.id);
        });
    };
}
