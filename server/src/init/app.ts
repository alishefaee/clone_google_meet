import 'express-async-errors'
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
const app = express()

// Error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

export { app }
