import { io } from 'socket.io-client'
// "undefined" means the URL will be computed from the `window.location` object
const URL = 'localhost:4000'
export const socket = io(URL, {
  autoConnect: false,
  auth: {
    username: localStorage.getItem('username')
  }
})
export const updateAuthToken = (newToken: string) => {
  socket.auth = {
    username: newToken
  }
}
