import './App.css'
import { useEffect, useState } from 'react'
import { socket, updateAuthToken } from './socket.ts'
import Home from './Home'
import Meeting from './Meeting'
import { useRoomContext, useRoomDispatch } from './context/RoomContext'
import { TMeeting, TParticipant } from './types'
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import Button from '@mui/material/Button'
const configuration = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    }
  ]
}

function App() {
  const { creator, roomId, participants, pcs, streams } = useRoomContext()
  const dispatch = useRoomDispatch()
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const [myUname, setMyUname] = useState('')
  const [code, setCode] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [localStream, setLocalStream] = useState < MediaStream | null > (null)
  useEffect(() => {
    setupLocalStream()
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
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
    socket.on('participant-new', async (data: TParticipant) => {
      console.log('participant-new', data)
      await handleOffer(data)
    })
    socket.on('candidate', async ({ candidate, username: caller }: {
      candidate: RTCIceCandidateInit
      username: string
    }) => {
      console.log('ICE candidate received', candidate, caller, participants)
      const ptc = participants.find((p) => p.username == caller)
      await pcs.current.get(ptc.username).addIceCandidate(candidate)
    })
    return () => {
      socket.off('candidate')
      socket.off('participant-new')
    }
  }, [roomId, participants])
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
    const pc = new RTCPeerConnection(configuration)
    pcs.current.set(data.username, pc)
    localStream.getTracks().forEach((track) => {
      console.log('caller - add local track:', track)
      pc.addTrack(track, localStream)
    })
    pc.ontrack = (ev) => {
      console.log('caller - Remote track received', ev)
      const newStream = new MediaStream()
      newStream.addTrack(ev.track)
      dispatch({
        type: 'EDIT_PARTICIPANT',
        payload: {
          aud: !!newStream.getAudioTracks()[0]?.enabled,
          vid: !!newStream.getVideoTracks()[0]?.enabled,
          username: data.username
        }
      })
      streams.current.set(data.username, newStream)
    }
    pc.onicecandidate = (ev) => {
      console.log('caller - on ice candidate')
      if (ev.candidate) {
        socket.emit('candidate', { candidate: ev.candidate, roomId }, () => {
          console.log('ICE sent', ev.candidate)
        })
      }
    }
    pc.oniceconnectionstatechange = () => {
      console.log('caller - ICE state change', pc.iceConnectionState)
    }
    pc.onsignalingstatechange = () => {
      console.log('Signaling state change', pc.signalingState)
    }
    dispatch({
      type: 'ADD_PARTICIPANT',
      payload: data
    })
    const offer = await pc.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true
    })
    await pc.setLocalDescription(offer)
    socket.emit('offer', { offer, targetUsername: data.username, roomId }, () => {
      console.log('offer sent')
    })
  }

  function setupLocalStream() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(function(stream) {
        setLocalStream(stream)
        setIsAudioEnabled(stream.getAudioTracks()[0].enabled)
        console.log('Local stream set')
      })
      .catch(function(err) {
        console.log('Something went wrong!')
      })
  }
  if (!myUname) {
    return (
      <Dialog
        open={!myUname}
        PaperProps={
          {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault()
              const formData = new FormData(event.currentTarget)
              const formJson = (Object as any).fromEntries(formData.entries())
              console.log(formJson.username)
              setMyUname(formJson.username)
              updateAuthToken(formJson.username)
              socket.connect()
            }
          } as any
        }
      >
        <DialogTitle>Login</DialogTitle> <
      DialogContent >
      <TextField
            autoFocus
            required
            margin='dense'
            id='username'
            name='username'
            label='Username'
            type='text'
            fullWidth
            variant='standard'
          /> <
      /DialogContent> <
      DialogActions >
      <Button type='submit'>Save</Button> <
      /DialogActions> <
      /Dialog>
    )
  }
  return (
    <>
      {creator ? (
        <Meeting localStream={localStream} code={code} myUname={myUname} />
      ) : (
        <Home
          isAudioEnabled={isAudioEnabled}
          setIsAudioEnabled={setIsAudioEnabled}
          isVideoEnabled={isVideoEnabled}
          setIsVideoEnabled={setIsVideoEnabled}
          setCode={setCode}
          code={code}
          myUname={myUname}
          localStream={localStream}
        />
      )}
    </>
  )
}
export default App
