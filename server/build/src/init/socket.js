"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketServer = socketServer;
const socket_io_1 = require("socket.io");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const on_connection_1 = require("../sockets/on-connection");
function socketServer(server) {
    console.log('socketServer');
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: '*'
        }
    });
    io.use(auth_middleware_1.authSocketMid);
    io.on('connection', (0, on_connection_1.onConnection)(io));
    return io;
}
