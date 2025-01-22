"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSocketMid = authSocketMid;
function authSocketMid(socket, next) {
    console.log('socket middleware');
    console.log(socket.handshake.auth.username);
    const username = socket.handshake.auth.username;
    console.log('usernamee:', username);
    if (!username)
        return next(new Error('username not found'));
    console.log('Auth success');
    socket.username = username;
    next();
}
