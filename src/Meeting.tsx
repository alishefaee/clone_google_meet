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
        username: caller
      }: {
        offer: RTCSessionDescriptionInit
        roomId: string
        username: string
      }) => {
        console.log('Offer received', roomId, caller)
        const ptc = participants.find((p) => p.username == caller)
        const pc = new RTCPeerConnection(configuration)
        console.log('pc found:', !!pc)
        pc.ontrack = (ev) => {
          console.log('Remote track received', ev)
          ptc.stream.addTrack(ev.track)
          ptc.aud = ptc.stream.getAudioTracks()[0].enabled
          ptc.vid = ptc.stream.getVideoTracks()[0].enabled
        }

        pc.onicecandidate = (ev) => {
          console.log('IICE candidate sent', ev.candidate)
          if (ev.candidate) {
            socket.emit('candidate', { candidate: ev.candidate, roomId })
          }
        }

        pc.oniceconnectionstatechange = () => {
          console.log('IICE connection state change', pc.iceConnectionState)
        }

        pc.onsignalingstatechange = () => {
          console.log('SSignaling state change', pc.signalingState)
        }

        localStream.getTracks().forEach((track) => {
          console.log('AAdding track:', track)
          pc.addTrack(track, localStream)
        })

        if (pc.signalingState !== 'stable') {
          console.error(`Cannot handle offer. Current signaling state: ${pc.signalingState}`)
          return
        }
        await pc.setRemoteDescription(offer)
        if (pc.signalingState !== 'have-remote-offer') {
          console.error(`Failed to create an answer: invalid signaling state ${pc.signalingState}`)
          return
        }
        const answer = await pc.createAnswer()
        await pc.setLocalDescription(answer)
        ptc.pc = pc
        socket.emit('answer', { answer, roomId, username: caller }, () => {
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
        console.log('answer received:', caller, participants)

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
  }, [participants])

  useEffect(() => {
    if (localStream && camRef.current) {
      camRef.current!.srcObject = localStream
    }
  }, [localStream])

  useEffect(() => {
    console.log('participants:', participants)
  }, [participants])

  return (
    <Box>
      <video ref={camRef} autoPlay></video>
      {participants
        .filter((p) => p.username !== username)
        .map((p) => (
          <ParticipantVideo key={p.username} stream={p.stream} />
        ))}
      <JoinRequest username={username} />
      <Drawer drawer={drawer} />
      <Footer code={code} drawer={drawer} setDrawer={setDrawer} username={username} />
    </Box>
  )
}

const ParticipantVideo = ({ stream }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  return <video ref={videoRef} autoPlay />
}
export default Meeting
