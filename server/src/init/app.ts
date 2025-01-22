import 'express-async-errors'
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import path from 'path'

const app = express()

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../../public')))

// Handle root route - serve index.html
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

// Handle all other routes - for client-side routing
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

// Error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

export { app }
