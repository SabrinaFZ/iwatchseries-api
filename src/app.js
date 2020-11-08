const bodyParser = require('body-parser')
const express = require('express')
const config = require('./config/variables.config')
const mongoClient = require('./config/mongo.config')

const routes = require('./routes')

function startServer () {
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use('/api', routes)
  app.listen(config.port, async () => {
    console.log(`Server is running ---> ${config.host}:${config.port}`)
    try {
      await mongoClient.run()
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
