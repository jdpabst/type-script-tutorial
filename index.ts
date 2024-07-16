import { PrismaClient } from '@prisma/client'
import express from 'express'

async function startServer() {
 const prisma = new PrismaClient()

 const app = express()
 const port = 3000

 app.get('/health', (req: any, res: any) => {
  res.status(200).send('ok')
 })

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 })
}

startServer();