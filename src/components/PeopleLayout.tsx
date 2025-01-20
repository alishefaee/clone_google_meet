import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Divider, List, ListItem, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MicOffIcon from '@mui/icons-material/MicOff'
import MicIcon from '@mui/icons-material/Mic'
import { useRoomContext } from '../context/RoomContext'

const PeopleLayout = () => {
  const { participants } = useRoomContext()
  return (
    <Box sx={{ width: 250, padding: 1 }}>
      <Typography variant="h6">People</Typography>
      <Divider />
      <List>
        {participants.map(({ username, vid, aud }: { username: string; vid: boolean; aud: boolean }) => (
          <ListItem key={username}>
            <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
              <AccountCircleIcon />
              <Typography sx={{ flex: 1 }}>{username}</Typography>
              {aud ? <MicIcon /> : <MicOffIcon />}
            </Stack>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
export default PeopleLayout
