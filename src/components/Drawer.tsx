import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import PeopleLayout from './PeopleLayout'
import ChatLayout from './ChatLayout'
import { DrawerLayoutEnum } from '../../enum/drawer-layout.enum'

export default function AnchorTemporaryDrawer({ drawer }) {
  return (
    <Drawer anchor="right" open={drawer != DrawerLayoutEnum.NONE}>
      {drawer == DrawerLayoutEnum.PEOPLE && <PeopleLayout />}
      {drawer == DrawerLayoutEnum.CHAT && <ChatLayout />}
    </Drawer>
  )
}
