import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import { DrawerLayoutEnum } from '../enum/drawer-layout.enum'
import JoinRequest from './components/JoinRequest'
import { socket } from './socket'
import { TParticipant } from './types'
import { useRoomContext, useRoomDispatch } from './context/RoomContext'

const configuration = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    }
  ]
}

const Meeting = ({ code, localStream, username }) => {
  const { roomId } = useRoomContext()
  const dispatch = useRoomDispatch()
  const [drawer, setDrawer] = useState(DrawerLayoutEnum.NONE)
  const camRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    socket.on('participant-new', (data: TParticipant) => {
      if (data.username == username) {
        console.log('It is me')
        return
      }
      handleOffer(data)
    })

    return () => {
      socket.off('participant-new')
    }
  }, [])

  useEffect(() => {
    if (localStream && camRef.current) {
      camRef.current!.srcObject = localStream
    }
  }, [localStream])

  async function handleOffer(data: TParticipant) {
    const peerConnection = new RTCPeerConnection(configuration)
    peerConnection.ontrack = (event) => {
      console.log('Remote track received', event)
      // todo: add remote tracks
      // remoteStream.addTrack(event.track)
      // handleRemoteTrackStateChange()
    }

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        console.log('ICE candidate sent', event.candidate)
        socket.emit('candidate', event.candidate)
      }
    }

    peerConnection.oniceconnectionstatechange = () => {
      console.log('ICE connection state change', peerConnection.iceConnectionState)
    }

    peerConnection.onsignalingstatechange = () => {
      console.log('Signaling state change', peerConnection.signalingState)
    }
    dispatch({
      type: 'ADD_PARTICIPANT',
      payload: { ...data, pc: peerConnection, stream: undefined }
    })

    const offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)
    socket.emit('offer', { offer, username, roomId })
  }

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
