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

const JoinRequest = ({ stream }) => {
  const [joinReqs, setJoinReqs] = useState<TJoinReq[]>([])
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null)
  const [remoteStream, setRemoteStream] = useState<Map<string, MediaStream>>(new Map())

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

  const createPeerConnection = useCallback(async () => {
    console.log('createPeerConnection')
    if (!peerConnectionRef.current) {
      const pc = new RTCPeerConnection(configuration)
      const remoteStream = new MediaStream()

      setRemoteStream(remoteStream)
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream
      }

      console.log('Remote track about')
      pc.ontrack = (event) => {
        console.log('Remote track received', event)
        remoteStream.addTrack(event.track)

        handleRemoteTrackStateChange()
      }

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          console.log('ICE candidate sent', event.candidate)
          socket.emit('candidate', event.candidate)
        }
      }

      pc.oniceconnectionstatechange = () => {
        console.log('ICE connection state change', pc.iceConnectionState)
      }

      pc.onsignalingstatechange = () => {
        console.log('Signaling state change', pc.signalingState)
      }

      if (stream) {
        stream.getTracks().forEach((track) => {
          console.log('Adding track:', track)
          pc.addTrack(track, stream)
        })
      }

      peerConnectionRef.current = pc
    }
  }, [stream])

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
