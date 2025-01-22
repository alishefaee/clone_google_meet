"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const node_http_1 = require("node:http");
const socket_io_client_1 = require("socket.io-client");
const socket_io_1 = require("socket.io");
function waitFor(socket, event) {
    return new Promise((resolve) => {
        socket.once(event, resolve);
    });
}
(0, vitest_1.describe)('socket io', () => {
    let io;
    let serverSocket;
    let clientSocket;
    const port = 4000;
    (0, vitest_1.beforeAll)(() => {
        return new Promise((resolve) => {
            const httpServer = (0, node_http_1.createServer)();
            io = new socket_io_1.Server(httpServer);
            httpServer.listen(port, () => {
                clientSocket = (0, socket_io_client_1.io)(`http://localhost:${port}`);
                io.on('connection', (socket) => {
                    serverSocket = socket;
                });
                clientSocket.on('connect', resolve);
            });
        });
    });
    (0, vitest_1.afterAll)(() => {
        io.close();
        clientSocket.disconnect();
    });
});
