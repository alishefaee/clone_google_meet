import { IconButton, Stack, Typography, useTheme } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined'
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined'
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import React, { useEffect } from 'react'
// import { useRoomContext } from '../context/Room.context.tsx'
// import { useWebRTC } from '../context/webrtc.context.tsx'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import VideocamIcon from '@mui/icons-material/Videocam'
import VideocamOffIcon from '@mui/icons-material/VideocamOff'
import { DrawerLayoutEnum } from '../../enum/drawer-layout.enum'

export default function Footer({ code, setDrawer, drawer, username }) {
  // const { stream, toggleAudioTrack, toggleVideoTrack, videoEnabled, audioEnabled } = useWebRTC()
  function dialogLayoutHandler(name: DrawerLayoutEnum) {
    if (name === drawer) {
      setDrawer(DrawerLayoutEnum.NONE)
    } else {
      setDrawer(name)
    }
  }

  // useEffect(() => {
  //   console.log('clicked', !!stream)
  //   if (stream) console.log(stream.getAudioTracks()[0].enabled)
  // }, [stream])

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
      <Typography variant="caption">{`${code} | ${username}`}</Typography>
      <Stack direction="row" sx={{ justifyContent: 'center', flex: 1 }}>
        <IconButton>
          {' '}
          <TagFacesOutlinedIcon />
        </IconButton>
        <IconButton>
          {' '}
          <PresentToAllOutlinedIcon />
        </IconButton>
        {/*{audioEnabled ? (*/}
        {/*  <IconButton onClick={toggleAudioTrack}>*/}
        {/*    <MicIcon />*/}
        {/*  </IconButton>*/}
        {/*) : (*/}
        {/*  <IconButton onClick={toggleAudioTrack}>*/}
        {/*    <MicOffIcon />*/}
        {/*  </IconButton>*/}
        {/*)}*/}
        {/*{videoEnabled ? (*/}
        {/*  <IconButton onClick={toggleVideoTrack}>*/}
        {/*    <VideocamIcon />*/}
        {/*  </IconButton>*/}
        {/*) : (*/}
        {/*  <IconButton onClick={toggleVideoTrack}>*/}
        {/*    <VideocamOffIcon />*/}
        {/*  </IconButton>*/}
        {/*)}*/}
        <IconButton>
          {' '}
          <BackHandOutlinedIcon />
        </IconButton>
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
