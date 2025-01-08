import React, { useEffect, useRef } from 'react'
import { Button, Divider, IconButton, Stack, TextField } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import VideocamIcon from '@mui/icons-material/Videocam'
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import { socket, updateAuthToken } from './socket.ts'
import { TSetMeeting } from './types'
import { useRoomDispatch } from './context/RoomContext'
const Home = ({
  setCode,
  code,
  myUname,
  isAudioEnabled,
  setIsAudioEnabled,
  isVideoEnabled,
  setIsVideoEnabled,
  localStream
}) => {
  const dispatch = useRoomDispatch()
  const camRef = useRef < HTMLVideoElement | null > (null)
  useEffect(() => {
    if (localStream && camRef.current) {
      camRef.current!.srcObject = localStream
    }
  }, [localStream])

  function setNewMeeting() {
    const id = Math.floor(Math.random() * 100000000).toString()
    if (!myUname) {
      console.log('No myUname')
      return
    }
    updateAuthToken(myUname)
    dispatch({ type: 'SET_ROOM', payload: id })
    socket.emit(
      'create-meeting', { id, aud: isAudioEnabled, vid: isVideoEnabled },
      ({ status, msg, data }: TSetMeeting) => {
        if (status == 'ERROR') {
          console.log('error', msg)
          return
        }
        setCode(id)
        dispatch({ type: 'SET_PARTICIPANTS', payload: data.participants })
        dispatch({ type: 'SET_CREATOR', payload: data.creator })
        console.log('Meeting created')
      }
    )
  }

  function joinMeeting() {
    if (!myUname) {
      console.log('No myUname')
      return
    }
    updateAuthToken(myUname)
    dispatch({ type: 'SET_ROOM', payload: code })
    socket.emit('join-meeting-req', { roomId: code }, ({ status, msg, data }: TSetMeeting) => {
      if (status == 'ERROR') {
        console.log('error', msg)
        return
      }
      console.log('join request sent')
    })
  }
  return (
    <Stack
      spacing={2}
      direction='row'
      justifyContent='center'
      sx={{ height: '100%' }}
      alignItems='center'
    >
      <Stack spacing={1}>
        <Button size='small' variant='contained' onClick={setNewMeeting}>
          New Meeting
        </Button>
        <Divider>OR</Divider>
        <TextField
          placeholder='Enter code'
          label='code'
          size='small'
          onChange={(e) => setCode(e.target.value)}
        />
        <Button size='small' variant='outlined' onClick={joinMeeting}>
          Join
        </Button>
      </Stack>
      <Stack>
        <Stack spacing={2} direction='row'>
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
