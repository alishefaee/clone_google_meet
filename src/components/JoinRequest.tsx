import * as React from 'react'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { socket } from '../socket'
import { useRoomContext, useRoomDispatch } from '../context/RoomContext'
import { TParticipant, TSetMeeting } from '../types'

type TJoinReq = {
  caller: string
  roomId: string
  sockId: string
}
const JoinRequest = ({}) => {
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
      { roomId, caller: req.caller, sockId: req.sockId },
      ({ status, msg, data }: TSetMeeting) => {
        console.log('status:', status, msg)
        if (status == 'ERROR') {
          console.log('error', msg)
          return
        }
      }
    )
    setJoinReqs((pre) => pre.filter((r) => r.caller != req.caller))
  }
  const handleClose = (req: TJoinReq) => {
    // todo: handle rejection
    setJoinReqs((pre) => pre.filter((r) => r.caller != req.caller))
  }
  const Action = ({ req }) => {
    return (
      <>
        <Button color="secondary" size="small" onClick={() => handleAdmit(req)}>
          ADMIT
        </Button>
        <IconButton size="small" aria-label="close" color="inherit" onClick={() => handleClose(req)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </>
    )
  }
  return (
    <>
      {joinReqs.map((req) => (
        <Snackbar
          key={req.caller}
          open={!!req}
          message={req.caller}
          action={<Action req={req} />}
          // ContentProps={{ sx: { backgroundColor: '#4E4E4EFF', color: 'white' } }}
        />
      ))}
    </>
  )
}
export default JoinRequest
