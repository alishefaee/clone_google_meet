import './App.css'
import { useEffect, useState } from 'react'
import { socket, updateAuthToken } from './socket.ts'
import Home from './Home'
import Meeting from './Meeting'
import { RoomProvider, useRoomContext } from './context/RoomContext'

function App() {
  const { creator } = useRoomContext()
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const [username, setUsername] = useState('')
  const [code, setCode] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected)

  const [localStream, setLocalStream] = useState<MediaStream | null>(null)

  useEffect(() => {
    let userInput = ''
    while (!userInput) {
      userInput = window.prompt('Please enter some input:', '')
      if (userInput == null) continue
      setUsername(userInput)
      localStorage.setItem('username', userInput)
      updateAuthToken(userInput)
    }

    setupLocalStream()

    console.log('dddd:', username)
    socket.connect()
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])

  useEffect(() => {
    console.log('cccc:', username)
  }, [username])

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
    <>
      {creator ? (
        <Meeting localStream={localStream} code={code} username={username} />
      ) : (
        <Home
          isAudioEnabled={isAudioEnabled}
          setIsAudioEnabled={setIsAudioEnabled}
          isVideoEnabled={isVideoEnabled}
          setIsVideoEnabled={setIsVideoEnabled}
          setCode={setCode}
          code={code}
          setUsername={setUsername}
          username={username}
          localStream={localStream}
        />
      )}
    </>
  )
}

export default App
