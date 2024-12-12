import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import { DrawerLayoutEnum } from '../enum/drawer-layout.enum'
const Meeting = ({ code, localStream }) => {
  const [drawer, setDrawer] = useState(DrawerLayoutEnum.NONE)
  const camRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (localStream && camRef.current) {
      camRef.current!.srcObject = localStream
    }
  }, [localStream])

  return (
    <Box>
      <video ref={camRef} autoPlay></video>
      <Drawer drawer={drawer} setDrawer={setDrawer} />
      <Footer code={code} drawer={drawer} setDrawer={setDrawer} />
    </Box>
  )
}

export default Meeting
