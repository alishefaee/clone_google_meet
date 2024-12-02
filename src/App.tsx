import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'
import { Button, Divider, IconButton, Stack, TextField } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import VideocamIcon from '@mui/icons-material/Videocam'
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import { useEffect, useRef, useState } from 'react'
import { socket } from './socket.ts'

function App() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const camRef = useRef<HTMLVideoElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [username, setUsername] = useState('')
  const [joinCode, setJoinCode] = useState('')
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [meeting, setMeeting] = useState<null | any>(null)

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
    if (streamRef.current) {
      const track = streamRef.current!.getAudioTracks()[0]
      track.enabled = isAudioEnabled
    }
  }, [isAudioEnabled])

  useEffect(() => {
    if (streamRef.current) {
      const track = streamRef.current!.getVideoTracks()[0]
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
        streamRef.current = stream
        setIsAudioEnabled(stream.getAudioTracks()[0].enabled)
        if (camRef.current) {
          camRef.current!.srcObject = stream
        }
      })
      .catch(function (err) {
        console.log('Something went wrong!')
      })
  }

  type TSetMeeting = {
    status: 'SUCCESS' | 'ERROR'
    msg: string
    data?: {
      creator: string
      participants: { username: string; vid: boolean; aud: boolean }[]
    }
  }
  function setNewMeeting() {
    const id = Math.floor(Math.random() * 100000000).toString()
    socket.emit(
      'create-meeting',
      { id, aud: isAudioEnabled, vid: isVideoEnabled },
      ({ status, msg, data }: TSetMeeting) => {
        if (status == 'ERROR') {
          console.log('error', msg)
          return
        }
        setMeeting(data)
        console.log('Meeting created')
      }
    )
  }

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      sx={{ height: '100%' }}
      alignItems="center"
    >
      <Stack spacing={1}>
        <Button size="small" variant="contained" onClick={setNewMeeting}>
          New Meeting
        </Button>
        <Divider>OR</Divider>
        <TextField
          placeholder="Enter code or link"
          size="small"
          onChange={(e) => setJoinCode(e.target.value)}
        />
        <Button size="small" variant="outlined" sx={{ color: 'black' }}>
          Join
        </Button>
        <Divider />
        <TextField
          placeholder="username"
          size="small"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Stack>
      <Stack>
        <Stack spacing={2} direction="row">
          {isAudioEnabled ? (
            <IconButton
              color="primary"
              onClick={() => {
                setIsAudioEnabled(false)
              }}
            >
              <MicIcon />
            </IconButton>
          ) : (
            <IconButton
              color="primary"
              onClick={() => {
                console.log('2')
                console.log(streamRef.current!.getAudioTracks()[0])
                setIsAudioEnabled(true)
              }}
            >
              <MicOffIcon />
            </IconButton>
          )}

          {isVideoEnabled ? (
            <IconButton
              color="primary"
              onClick={() => {
                setIsVideoEnabled(false)
              }}
            >
              <VideocamIcon />
            </IconButton>
          ) : (
            <IconButton
              color="primary"
              onClick={() => {
                setIsVideoEnabled(true)
              }}
            >
              <VideocamOffIcon />
            </IconButton>
          )}
        </Stack>
        <video ref={camRef} autoPlay></video>
      </Stack>
    </Stack>
  )
}

export default App
