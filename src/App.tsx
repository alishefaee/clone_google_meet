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
  const { creator, roomId, participants } = useRoomContext()
  const dispatch = useRoomDispatch()
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const [username, setUsername] = useState('')
  const [code, setCode] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected)

  const [localStream, setLocalStream] = useState<MediaStream | null>(null)

  useEffect(() => {
    setupLocalStream()
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('init-meeting', (meeting: TMeeting) => {
      dispatch({ type: 'SET_PARTICIPANTS', payload: meeting.participants })
      dispatch({ type: 'SET_CREATOR', payload: meeting.creator })
      // dispatch({type:'SET_ROOM', payload: meeting.})
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

    socket.on(
      'candidate',
      async ({
        candidate,
        username: caller
      }: {
        candidate: RTCIceCandidateInit
        username: string
      }) => {
        console.log('ICE candidate received', candidate, caller, participants)
        const ptc = participants.find((p) => p.username == caller)
        await ptc.pc.addIceCandidate(candidate)
      }
    )
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
    const peerConnection = new RTCPeerConnection(configuration)
    peerConnection.ontrack = (ev) => {
      console.log('Remote track received', ev)
      data.stream = new MediaStream()
      data.stream.addTrack(ev.track)
      dispatch({
        type: 'EDIT_PARTICIPANT',
        payload: {
          aud: !!data.stream.getAudioTracks()[0]?.enabled,
          vid: !!data.stream.getVideoTracks()[0]?.enabled,
          username: data.username
        }
      })
    }

    peerConnection.onicecandidate = (ev) => {
      console.log('peerConnection.onicecandidate')
      if (ev.candidate) {
        socket.emit(
          'candidate',
          {
            candidate: ev.candidate,
            roomId
          },
          () => {
            console.log('ICE candidate sent', ev.candidate)
          }
        )
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
      payload: { ...data, pc: peerConnection, stream: new MediaStream() }
    })

    const offer = await peerConnection.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true
    })
    await peerConnection.setLocalDescription(offer)
    console.log('roomId::', roomId)
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

  if (!username) {
    return (
      <Dialog
        open={!username}
        // onClose={handleClose}
        PaperProps={
          {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault()
              const formData = new FormData(event.currentTarget)
              const formJson = Object.fromEntries(formData.entries())
              console.log(formJson.username)
              setUsername(formJson.username)
              updateAuthToken(formJson.username)
              socket.connect()
            }
          } as any
        }
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          {/*<DialogContentText>*/}
          {/*  To subscribe to this website, please enter your email address here. We will send updates*/}
          {/*  occasionally.*/}
          {/*</DialogContentText>*/}
          <TextField
            autoFocus
            required
            margin="dense"
            id="username"
            name="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    )
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
