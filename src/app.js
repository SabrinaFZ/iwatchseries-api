
const dotenv = require('dotenv')
const express = require('express')

const env = dotenv.config()
if (env.error) {
  throw new Error("Couldn't find .env file")
}

const host = process.env.host || 'http://localhost'
const port = process.env.port || '3000'

function startServer () {
  const app = express()
  app.listen(port, () => {
    console.log(`Server is running ---> ${host}:${port}`)
  })
    .on('error', () => {
      process.exit(1)
    })
}

startServer()
