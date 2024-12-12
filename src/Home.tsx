import React, { useEffect, useRef } from 'react'
import { Button, Divider, IconButton, Stack, TextField } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import VideocamIcon from '@mui/icons-material/Videocam'
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import { socket, updateAuthToken } from './socket.ts'
import { TSetMeeting } from './types/meeting'

const Home = ({
  setMeeting,
  setCode,
  setUsername,
  username,
  isAudioEnabled,
  setIsAudioEnabled,
  isVideoEnabled,
  setIsVideoEnabled,
  localStream
}) => {
  const camRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    console.log('1::')
    if (localStream && camRef.current) {
      console.log('2::')
      camRef.current!.srcObject = localStream
    }
  }, [localStream])
  function setNewMeeting() {
    const id = Math.floor(Math.random() * 100000000).toString()
    console.log('id:', id, username)
    if (!username) {
      console.log('No username')
      return
    }
    updateAuthToken(username)

    console.log('username:', username)
    socket.emit(
      'create-meeting',
      { id, aud: isAudioEnabled, vid: isVideoEnabled },
      ({ status, msg, data }: TSetMeeting) => {
        console.log('status:', status)
        if (status == 'ERROR') {
          console.log('error', msg)
          return
        }
        setCode(id)
        setMeeting(data)
        console.log('Meeting created')
      }
    )
    console.log('username2:', username)
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
        <TextField
          placeholder="username"
          size="small"
          label="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <Divider />
        <Button size="small" variant="contained" onClick={setNewMeeting}>
          New Meeting
        </Button>
        <Divider>OR</Divider>
        <TextField
          placeholder="Enter code"
          label="code"
          size="small"
          onChange={(e) => setCode(e.target.value)}
        />
        <Button size="small" variant="outlined">
          Join
        </Button>
      </Stack>
      <Stack>
        <Stack spacing={2} direction="row">
          {isAudioEnabled ? (
            <IconButton
              onClick={() => {
                setIsAudioEnabled(false)
              }}
            >
              <MicIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setIsAudioEnabled(true)
              }}
            >
              <MicOffIcon />
            </IconButton>
          )}

          {isVideoEnabled ? (
            <IconButton
              onClick={() => {
                setIsVideoEnabled(false)
              }}
            >
              <VideocamIcon />
            </IconButton>
          ) : (
            <IconButton
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

export default Home
