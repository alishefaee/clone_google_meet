import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import { DrawerLayoutEnum } from '../enum/drawer-layout.enum'
import JoinRequest from './components/JoinRequest'
import { useRoomContext, useRoomDispatch } from './context/RoomContext'

const Meeting = ({ code, myUname, isAudioEnabled, isVideoEnabled, setIsAudioEnabled, setIsVideoEnabled }) => {
  const { participants, streams, localStream, pcs } = useRoomContext()
  const [drawer, setDrawer] = useState(DrawerLayoutEnum.NONE)

  const totalParticipants = participants.length + 1 // +1 for local user
  // const totalParticipants = 7 // +1 for local user
  const columns = Math.ceil(Math.sqrt(totalParticipants))
  const rows = Math.ceil(totalParticipants / columns)

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
        <VideoBox key={myUname} stream={localStream} username={`${myUname} (You)`} />
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
  const videoRef = useRef(null)
  const [isPortrait, setIsPortrait] = useState(false)

  useEffect(() => {
    if (videoRef.current && stream.current) {
      videoRef.current.srcObject = stream.current
      videoRef.current.onloadedmetadata = () => {
        const videoWidth = videoRef.current.videoWidth
        const videoHeight = videoRef.current.videoHeight
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
