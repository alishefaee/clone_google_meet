import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import { DrawerLayoutEnum } from '../enum/drawer-layout.enum'
import JoinRequest from './components/JoinRequest'
import { socket } from './socket'
import { useRoomContext } from './context/RoomContext'

const configuration = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    }
  ]
}

const Meeting = ({ code, localStream, username }) => {
  const { participants } = useRoomContext()
  const [drawer, setDrawer] = useState(DrawerLayoutEnum.NONE)
  const camRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    socket.on(
      'offer',
      async ({
        offer,
        roomId,
        username
      }: {
        offer: RTCSessionDescriptionInit
        roomId: string
        username: string
      }) => {
        console.log('Offer received', offer)
        const peerConnection = new RTCPeerConnection(configuration)
        const signalingState = peerConnection.signalingState
        if (signalingState !== 'stable') {
          console.error(`Cannot handle offer. Current signaling state: ${signalingState}`)
          return
        }
        await peerConnection.setRemoteDescription(offer)
        if (peerConnection.signalingState !== 'have-remote-offer') {
          console.error(
            `Failed to create an answer: invalid signaling state ${peerConnection.signalingState}`
          )
          return
        }
        const answer = await peerConnection.createAnswer()
        await peerConnection.setLocalDescription(answer)
        socket.emit('answer', { answer, roomId, username }, () => {
          console.log('answer processed')
        })
      }
    )

    socket.on(
      'answer',
      async ({
        answer,
        roomId,
        username: caller
      }: {
        answer: RTCSessionDescriptionInit
        roomId: string
        username: string
      }) => {
        console.log('answer received:', answer)

        const ptc = participants.find((pc) => pc.username == caller)
        console.log('state:', ptc.pc.signalingState)
        if (ptc.pc.signalingState !== 'have-local-offer') {
          console.error(
            'Failed to set remote description: not in have-local-offer state. Current state:',
            ptc.pc.signalingState
          )
          return
        }

        const remoteDesc = new RTCSessionDescription(answer)
        await ptc.pc.setRemoteDescription(remoteDesc)
      }
    )

    return () => {
      socket.off('offer')
      socket.off('answer')
    }
  }, [])

  useEffect(() => {
    if (localStream && camRef.current) {
      camRef.current!.srcObject = localStream
    }
  }, [localStream])

  return (
    <Box>
      <video ref={camRef} autoPlay></video>
      <JoinRequest username={username} />
      <Drawer drawer={drawer} />
      <Footer code={code} drawer={drawer} setDrawer={setDrawer} />
    </Box>
  )
}

export default Meeting
