import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import PeopleLayout from './PeopleLayout.tsx'
import ChatLayout from './ChatLayout.tsx'
import { DrawerLayoutEnum } from '../../enum/drawer-layout.enum'

export default function AnchorTemporaryDrawer({ drawer, meeting }) {
  return (
    <Drawer anchor="right" open={drawer != DrawerLayoutEnum.NONE}>
      {drawer == DrawerLayoutEnum.PEOPLE && <PeopleLayout meeting={meeting} />}
      {drawer == DrawerLayoutEnum.CHAT && <ChatLayout />}
    </Drawer>
  )
}
