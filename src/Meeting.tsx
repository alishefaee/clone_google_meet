import React, { useEffect, useRef, useState } from 'react'
import { Box, Stack } from '@mui/material'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import { DrawerLayoutEnum } from '../enum/drawer-layout.enum'
import JoinRequest from './components/JoinRequest'
import { socket } from './socket'
import { useRoomContext, useRoomDispatch } from './context/RoomContext'
const configuration = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    }
  ]
}
const Meeting = ({ code, localStream, myUname }) => {
  const dispatch = useRoomDispatch()
  const { participants, streams, pcs } = useRoomContext()
  const [drawer, setDrawer] = useState(DrawerLayoutEnum.NONE)
  const camRef = useRef < HTMLVideoElement | null > (null)
  useEffect(() => {
    socket.on('offer', async ({ offer, roomId, username: caller }: {
      offer: RTCSessionDescriptionInit
      roomId: string
      username: string
    }) => {
      console.log('Offer received', roomId, caller)
      const ptc = participants.find((p) => p.username == caller)
      console.log('pc found:', ptc.username)
      const pc = new RTCPeerConnection(configuration)
      pcs.current.set(ptc.username, pc)
      pc.ontrack = (ev) => {
        console.log('callee - Remote track received')
        const s = new MediaStream()
        s.addTrack(ev.track)
        streams.current.set(ptc.username, s)
        dispatch({
          type: 'EDIT_PARTICIPANT',
          payload: {
            aud: !!s.getAudioTracks()[0]?.enabled,
            vid: !!s.getVideoTracks()[0]?.enabled,
            username: ptc.username
          }
        })
      }
      pc.onicecandidate = (ev) => {
        console.log('callee - on ice candidate')
        if (ev.candidate) {
          socket.emit('candidate', { candidate: ev.candidate, roomId })
        }
      }
      pc.oniceconnectionstatechange = () => {
        console.log('callee - ICE connection state change', pc.iceConnectionState)
      }
      pc.onsignalingstatechange = () => {
        console.log('callee - Signaling state change', pc.signalingState)
      }
      localStream.getTracks().forEach((track) => {
        console.log('callee - Adding track:', track)
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
      socket.emit('answer', { answer, roomId, username: caller }, () => {
        console.log('answer processed')
      })
    })
    socket.on('answer', async ({ answer, roomId, username: caller }: {
      answer: RTCSessionDescriptionInit
      roomId: string
      username: string
    }) => {
      console.log('answer received:', caller, participants)
      const ptc = participants.find((pc) => pc.username == caller)
      const pc = pcs.current.get(ptc.username)
      console.log('state:', pc.signalingState)
      if (pc.signalingState !== 'have-local-offer') {
        console.error(
          'Failed to set remote description: not in have-local-offer state. Current state:',
          pc.signalingState
        )
        return
      }
      const remoteDesc = new RTCSessionDescription(answer)
      await pc.setRemoteDescription(remoteDesc)
    })
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
  return (
    <Box>
      <Stack direction='row'>
        <video ref={camRef} autoPlay></video>
        {participants
          .filter((p) => p.username != myUname)
          .map((ptc) =>
            <ParticipantVideo
              key={ptc.username}
              stream={streams.current.get(ptc.username)}
              username={ptc.username}
            />
          )}
      </Stack>
      <JoinRequest />
      <Drawer drawer={drawer} />
      <Footer code={code} drawer={drawer} setDrawer={setDrawer} myUname={myUname} />
    </Box>
  )
}
const ParticipantVideo = ({ stream, username }) => {
  const videoRef = useRef < HTMLVideoElement > (null)
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])
  return (
    <div>
      <p>{username}</p>
      <video ref={videoRef} autoPlay />
    </div>
  )
}
export default Meeting
