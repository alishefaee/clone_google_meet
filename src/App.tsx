import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'
import { useEffect, useRef, useState } from 'react'
import { socket } from './socket.ts'
import Home from './Home'
import { TMeeting } from './types/meeting'

function App() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const [username, setUsername] = useState('')
  const [code, setCode] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [meeting, setMeeting] = useState<null | TMeeting>(null)

  const [localStream, setLocalStream] = useState<MediaStream | null>(null)

  useEffect(() => {
    setupLocalStream()

    socket.connect()
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])

  useEffect(() => {
    if (localStream) {
      const track = localStream.getAudioTracks()[0]
      track.enabled = isAudioEnabled
    }
  }, [isAudioEnabled])

  useEffect(() => {
    if (localStream) {
      const track = localStream.getVideoTracks()[0]
      track.enabled = isVideoEnabled
    }
  }, [isVideoEnabled])

  function onConnect() {
    console.log('Connected to server')
    setIsConnected(true)
  }

  function onDisconnect() {
    console.log('Disconnected from server')
    setIsConnected(false)
  }

  function setupLocalStream() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(function (stream) {
        setLocalStream(stream)
        setIsAudioEnabled(stream.getAudioTracks()[0].enabled)
        console.log('getUserMedia')
      })
      .catch(function (err) {
        console.log('Something went wrong!')
      })
  }

  return (
    <Home
      isAudioEnabled={isAudioEnabled}
      setIsAudioEnabled={setIsAudioEnabled}
      isVideoEnabled={isVideoEnabled}
      setIsVideoEnabled={setIsVideoEnabled}
      setMeeting={setMeeting}
      setCode={setCode}
      setUsername={setUsername}
      username={username}
      localStream={localStream}
    />
  )
}

export default App
