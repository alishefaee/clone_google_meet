"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.server = void 0;
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const socket_1 = require("./init/socket");
const app_1 = require("./init/app");
const path_1 = __importDefault(require("path"));
const options = {
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, '../ssl/key.pem')),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, '../ssl/cert.pem'))
};
const server = process.env.NODE_ENV === 'production' ? https_1.default.createServer(options, app_1.app) : http_1.default.createServer(app_1.app);
exports.server = server;
const port = 4000;
console.log('Create IO');
const io = (0, socket_1.socketServer)(server);
exports.io = io;
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + (addr === null || addr === void 0 ? void 0 : addr.port);
    console.log('listening on ' + bind);
}
