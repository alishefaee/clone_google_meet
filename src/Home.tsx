import React, { useEffect, useRef } from 'react'
import { Button, Divider, IconButton, Stack, TextField } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import VideocamIcon from '@mui/icons-material/Videocam'
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import { socket, updateAuthToken } from './socket.ts'
import { TSetMeeting } from './types'
import { useRoomContext, useRoomDispatch } from './context/RoomContext'

const Home = ({
  setCode,
  code,
  setUsername,
  username,
  isAudioEnabled,
  setIsAudioEnabled,
  isVideoEnabled,
  setIsVideoEnabled,
  localStream
}) => {
  const dispatch = useRoomDispatch()
  const camRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (localStream && camRef.current) {
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
        dispatch({ type: 'SET_PARTICIPANTS', payload: data.participants })
        dispatch({ type: 'SET_CREATOR', payload: data.creator })
        console.log('dispatch creator')
        console.log('Meeting created')
      }
    )
    console.log('username2:', username)
  }

  function joinMeeting() {
    if (!username) {
      console.log('No username')
      return
    }
    console.log('log1')
    updateAuthToken(username)
    // socket.connect()
    console.log('log2')
    socket.emit('join-meeting-req', { roomId: code }, ({ status, msg, data }: TSetMeeting) => {
      console.log('status:', status)
      if (status == 'ERROR') {
        console.log('error', msg)
        return
      }
      console.log('join request send')
      // setCode(code)
      // setMeeting(data)
      // console.log('Meeting joined')
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
        <Button size="small" variant="outlined" onClick={joinMeeting}>
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
