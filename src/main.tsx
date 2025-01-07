import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { RoomProvider } from './context/RoomContext'
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})
createRoot(document.getElementById('root') !).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RoomProvider>
        <App />
      </RoomProvider>
    </ThemeProvider>
  </StrictMode>
)
