import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import { DrawerLayoutEnum } from '../enum/drawer-layout.enum'
const Meeting = ({ code, camRef }) => {
  const [drawer, setDrawer] = useState(DrawerLayoutEnum.NONE)

  return (
    <Box>
      <video ref={camRef} autoPlay style={{ width: '640px', height: '480px' }}></video>
      <Drawer drawer={drawer} setDrawer={setDrawer} />
      <Footer code={code} drawer={drawer} setDrawer={setDrawer} />
    </Box>
  )
}

export default Meeting
