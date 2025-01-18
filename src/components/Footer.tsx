import { IconButton, Stack, Typography, useTheme } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined'
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined'
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import React, { useEffect } from 'react'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import VideocamIcon from '@mui/icons-material/Videocam'
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import { DrawerLayoutEnum } from '../../enum/drawer-layout.enum'
import { useRoomContext } from '../context/RoomContext'

export default function Footer({
  code,
  setDrawer,
  drawer,
  myUname,
  isAudioEnabled,
  isVideoEnabled,
  setIsAudioEnabled,
  setIsVideoEnabled
}) {
  const { localStream } = useRoomContext()

  function dialogLayoutHandler(name: DrawerLayoutEnum) {
    if (name === drawer) {
      setDrawer(DrawerLayoutEnum.NONE)
    } else {
      setDrawer(name)
    }
  }

  const toggleAudioTrack = () => {
    // if (stream) {
    const audioTrack = localStream.current.getAudioTracks()[0]
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled
      setIsAudioEnabled(audioTrack.enabled) // Sync state with track property
    }
    // }
  }

  const toggleVideoTrack = () => {
    const videoTrack = localStream.current.getVideoTracks()[0]
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled
      setIsVideoEnabled(videoTrack.enabled)
    }
  }

  return (
    <Stack
      direction="row"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: (theme) => theme.palette.background.default,
        alignItems: 'center',
        boxSizing: 'border-box',
        pl: 2,
        pr: 2
      }}
    >
      <Typography variant="caption">{`${code} | ${myUname}`}</Typography>
      <Stack direction="row" sx={{ justifyContent: 'center', flex: 1 }}>
        <IconButton>
          {' '}
          <PresentToAllOutlinedIcon />
        </IconButton>
        {isAudioEnabled ? (
          <IconButton onClick={toggleAudioTrack}>
            <MicIcon />
          </IconButton>
        ) : (
          <IconButton onClick={toggleAudioTrack}>
            <MicOffIcon />
          </IconButton>
        )}
        {isVideoEnabled ? (
          <IconButton onClick={toggleVideoTrack}>
            <VideocamIcon />
          </IconButton>
        ) : (
          <IconButton onClick={toggleVideoTrack}>
            <VideocamOffIcon />
          </IconButton>
        )}
        <IconButton>
          {' '}
          <MoreVertIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
        <IconButton onClick={() => dialogLayoutHandler(DrawerLayoutEnum.PEOPLE)}>
          <PeopleAltOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => dialogLayoutHandler(DrawerLayoutEnum.CHAT)}>
          {' '}
          <ChatBubbleOutlineOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}
