import * as React from 'react'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { socket } from '../socket.ts'
import { useRoomContext, useRoomDispatch } from '../context/RoomContext'
import { TParticipant, TSetMeeting } from '../types'

type TJoinReq = {
  username: string
  roomId: string
  sockId: string
}

const JoinRequest = ({ username }) => {
  const dispatch = useRoomDispatch()
  const { roomId } = useRoomContext()
  const [joinReqs, setJoinReqs] = useState<TJoinReq[]>([])

  useEffect(() => {
    socket.on('join-req', (data: TJoinReq) => {
      console.log('join-req', data)
      setJoinReqs((pre) => pre.concat(data))
    })

    return () => {
      socket.off('join-req')
    }
  }, [])

  const handleAdmit = (req: TJoinReq) => {
    // handleOffer(req.username)
    console.log('rooomId:', roomId)
    socket.emit(
      'join-accept',
      { roomId, username: req.username, sockId: req.sockId },
      ({ status, msg, data }: TSetMeeting) => {
        console.log('status:', status, msg)
        if (status == 'ERROR') {
          console.log('error', msg)
          return
        }
      }
    )
    setJoinReqs((pre) => pre.filter((r) => r.username != req.username))
  }

  const handleClose = (req: TJoinReq) => {
    // todo: handle rejection
    setJoinReqs((pre) => pre.filter((r) => r.username != req.username))
  }

  const Action = ({ req }) => {
    return (
      <>
        <Button color="secondary" size="small" onClick={() => handleAdmit(req)}>
          ADMIT
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={() => handleClose(req)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </>
    )
  }

  return (
    <>
      {joinReqs.map((req) => (
        <Snackbar
          key={req.username}
          open={!!req}
          message={req.username}
          action={<Action req={req} />}
          // ContentProps={{ sx: { backgroundColor: '#4E4E4EFF', color: 'white' } }}
        />
      ))}
    </>
  )
}

export default JoinRequest
