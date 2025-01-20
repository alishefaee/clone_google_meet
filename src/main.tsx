import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { RoomProvider } from './context/RoomContext'
import App from './App'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RoomProvider>
        <App />
      </RoomProvider>
    </ThemeProvider>
  </StrictMode>
)
