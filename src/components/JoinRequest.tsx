import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { socket } from '../socket.ts'

type TJoinReq = {
  username: string
  roomId: string
}

const configuration = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    }
  ]
}

const JoinRequest = () => {
  const [joinReqs, setJoinReqs] = useState<TJoinReq[]>([])
  // const peerConnectionRef = useRef<RTCPeerConnection | null>(null)
  // const [remoteStream, setRemoteStream] = useState<Map<string, MediaStream>>(new Map())

  useEffect(() => {
    socket.on('join-req', (data: TJoinReq) => {
      setJoinReqs((pre) => pre.concat(data))
    })

    return () => {
      socket.off('join-req')
    }
  }, [])

  const handleOffer = async (meetingId: string) => {
    console.log('Creating offer')
    await createPeerConnection()
    if (peerConnectionRef.current) {
      const offer = await peerConnectionRef.current.createOffer()
      await peerConnectionRef.current.setLocalDescription(offer)
      socket.emit('offer', { offer, meetingId })
    }
  }

  const handleAdmit = (req: TJoinReq) => {
    handleOffer(req.roomId)
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
