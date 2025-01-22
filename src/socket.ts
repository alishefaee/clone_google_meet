import { io } from 'socket.io-client'

const URL = import.meta.env.VITE_API_URL
console.log('BASE_URL:', URL)
export const socket = io(URL, {
  autoConnect: false,
  secure: import.meta.env.PROD,
  rejectUnauthorized: false, // Required for self-signed certificates
  auth: {
    username: localStorage.getItem('username')
  }
})

export const updateAuthToken = (newToken: string) => {
  socket.auth = {
    username: newToken
  }
}
