import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack
} from '@mui/material'
import Box from '@mui/material/Box'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MicOffIcon from '@mui/icons-material/MicOff'
import MicIcon from '@mui/icons-material/Mic'
import { TMeeting } from '../types/meeting'

const PeopleLayout = ({ meeting }: { meeting: TMeeting }) => {
  useEffect(() => {
    console.log('meeting:', meeting)
  }, [meeting])
  return (
    <Box sx={{ width: 250, padding: 1 }}>
      <Typography variant="h6">People</Typography>
      <Divider />
      <List>
        {meeting.participants.map(({ username, vid, aud }) => (
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
