const express = require('express')
const config = require('./config/variables')
const mongoClient = require('./config/mongoClient')

function startServer () {
  const app = express()
  app.listen(config.port, async () => {
    try {
      await mongoClient.run()
      console.log(`Server is running ---> ${config.host}:${config.port}`)
    } catch (err) {
      console.log(err)
      process.exit(1)
    }
  })
    .on('error', () => {
      process.exit(1)
    })
}

startServer()
