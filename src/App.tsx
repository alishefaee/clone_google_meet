import './App.css'
import { useEffect, useState } from 'react'
import { socket, updateAuthToken } from './socket.ts'
import Home from './Home'
import Meeting from './Meeting'
import { RoomProvider, useRoomContext, useRoomDispatch } from './context/RoomContext'
import { TMeeting, TParticipant } from './types'

const configuration = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    }
  ]
}

function App() {
  const { creator, roomId, participants } = useRoomContext()
  const dispatch = useRoomDispatch()
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const [username, setUsername] = useState('')
  const [code, setCode] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected)

  const [localStream, setLocalStream] = useState<MediaStream | null>(null)

  useEffect(() => {
    let userInput = ''
    while (!userInput) {
      console.log('HERE')
      userInput = window.prompt('Please enter some input:', '')
      if (userInput == null) continue
      setUsername(userInput)
      updateAuthToken(userInput)
    }

    setupLocalStream()

    console.log('dddd:', username)
    socket.connect()
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('participant-new', (data: TParticipant) => {
      console.log('participant-new')
      if (data.username == username) {
        console.log('It is me')
        return
      }
      handleOffer(data)
    })

    socket.on('init-meeting', (meeting: TMeeting) => {
      dispatch({ type: 'SET_PARTICIPANTS', payload: meeting.participants })
      dispatch({ type: 'SET_CREATOR', payload: meeting.creator })
    })

    return () => {
      socket.off('init-meeting')
      socket.off('participant-new')
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

  async function handleOffer(data: TParticipant) {
    const peerConnection = new RTCPeerConnection(configuration)
    peerConnection.ontrack = (event) => {
      console.log('Remote track received', event)
      // todo: add remote tracks
      // remoteStream.addTrack(event.track)
      // handleRemoteTrackStateChange()
    }

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        console.log('ICE candidate sent', event.candidate)
        socket.emit('candidate', event.candidate)
      }
    }

    peerConnection.oniceconnectionstatechange = () => {
      console.log('ICE connection state change', peerConnection.iceConnectionState)
    }

    peerConnection.onsignalingstatechange = () => {
      console.log('Signaling state change', peerConnection.signalingState)
    }
    dispatch({
      type: 'ADD_PARTICIPANT',
      payload: { ...data, pc: peerConnection, stream: undefined }
    })

    const offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)
    socket.emit('offer', { offer, targetUsername: data.username, roomId }, () => {
      console.log('offer processed')
    })
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
