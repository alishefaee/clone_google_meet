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

function App() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const camRef = useRef<HTMLVideoElement | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  useEffect(() => {
    setupLocalStream()
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

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      sx={{ height: '100%' }}
      alignItems="center"
    >
      <Stack spacing={1}>
        <Button size="small" variant="contained">
          New Meeting
        </Button>
        <Divider>OR</Divider>
        <TextField placeholder="Enter code or link" size="small" />
        <Button size="small" variant="outlined" sx={{ color: 'black' }}>
          Join
        </Button>
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
