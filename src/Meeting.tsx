import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import { DrawerLayoutEnum } from '../enum/drawer-layout.enum'
import JoinRequest from './components/JoinRequest'
import { useRoomContext, useRoomDispatch } from './context/RoomContext'
import { socket } from './socket.ts'

const configuration = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    }
  ]
}

const Meeting = ({ code, myUname, isAudioEnabled, isVideoEnabled, setIsAudioEnabled, setIsVideoEnabled }) => {
  const dispatch = useRoomDispatch()
  const { participants, streams, localStream, pcs } = useRoomContext()
  const [drawer, setDrawer] = useState(DrawerLayoutEnum.NONE)

  const totalParticipants = participants.length + 1 // +1 for local user
  // const totalParticipants = 7 // +1 for local user
  const columns = Math.ceil(Math.sqrt(totalParticipants))
  const rows = Math.ceil(totalParticipants / columns)

  useEffect(() => {
    socket.on(
      'offer',
      async ({ offer, roomId, caller }: { offer: RTCSessionDescriptionInit; roomId: string; caller: string }) => {
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
        localStream.current.getTracks().forEach((track) => {
          console.log('callee - Adding track:', track)
          pc.addTrack(track, localStream.current)
        })
        if (pc.signalingState !== 'stable') {
          console.error(`Cannot handle offer. Current signaling state: ${pc.signalingState}`)
          return
        }
        await pc.setRemoteDescription(offer)
        // if (pc.signalingState !== 'have-remote-offer') {
        //   console.error(`Failed to create an answer: invalid signaling state ${pc.signalingState}`)
        //   return
        // }
        const answer = await pc.createAnswer()
        await pc.setLocalDescription(answer)
        socket.emit('answer', { answer, roomId, caller }, () => {
          console.log('answer processed')
        })
      }
    )
    socket.on(
      'answer',
      async ({ answer, roomId, callee }: { answer: RTCSessionDescriptionInit; roomId: string; callee: string }) => {
        console.log('answer received:', callee, participants)
        const ptc = participants.find((pc) => pc.username == callee)
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
      }
    )
    return () => {
      socket.off('offer')
      socket.off('answer')
    }
  }, [participants])

  return (
    <Box sx={{ overflowY: 'hidden' }}>
      <Box
        sx={{
          display: 'grid',
          gap: '10px',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          width: '100%',
          height: '100vh',
          padding: '10px',
          paddingBottom: '70px',
          boxSizing: 'border-box',
          overflowY: 'auto'
        }}
      >
        <VideoBox key={myUname} stream={localStream.current} username={`${myUname} (You)`} />
        {participants
          .filter((p) => p.username !== myUname)
          .map((ptc) => (
            <VideoBox key={ptc.username} stream={streams.current.get(ptc.username)} username={ptc.username} />
          ))}
      </Box>
      <JoinRequest />
      <Drawer drawer={drawer} />
      <Footer
        code={code}
        drawer={drawer}
        setDrawer={setDrawer}
        myUname={myUname}
        isAudioEnabled={isAudioEnabled}
        isVideoEnabled={isVideoEnabled}
        setIsAudioEnabled={setIsAudioEnabled}
        setIsVideoEnabled={setIsVideoEnabled}
      />
    </Box>
  )
}

const VideoBox = ({ stream, username }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPortrait, setIsPortrait] = useState(false)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current!.srcObject = stream
      videoRef.current!.onloadedmetadata = () => {
        const videoWidth = videoRef.current!.videoWidth
        const videoHeight = videoRef.current!.videoHeight
        setIsPortrait(videoHeight > videoWidth)
      }
    }
  }, [stream])

  return (
    <Box
      sx={{
        position: 'relative',
        minWidth: '200px',
        minHeight: '200px',
        backgroundColor: '#1a1a1a',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: isPortrait ? 'auto' : '100%',
          height: isPortrait ? '100%' : 'auto',
          objectFit: 'contain'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: '20px',
          padding: '4px 8px',
          color: '#fff',
          textShadow: '-1px -1px 0 black, 1px -1px 0 black, 1px 1px 0 black, 1px 1px 0 black'
        }}
      >
        {username}
      </Box>
    </Box>
  )
}

export default Meeting
