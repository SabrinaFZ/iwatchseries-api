
const express = require('express')
const config = require('./config/variables')
const mongoClient = require('./config/mongoClient')

function startServer () {
  const app = express()
  app.listen(config.port, () => {
    mongoClient.run()
    console.log(`Server is running ---> ${config.host}:${config.port}`)
  })
    .on('error', () => {
      process.exit(1)
    })
}

startServer()
