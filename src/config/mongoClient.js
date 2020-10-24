const { MongoClient } = require('mongodb')
const config = require('./variables')

const uri = config.mongoUri
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  maxPoolSize: 5,
  auth: {
    user: config.mongoUser,
    password: config.mongoPassword
  },
  dbName: config.mongoDb
})

async function run () {
  try {
    await client.connect()
    console.log('Connected successfully to mongo instance')
  } catch (err) {
    console.log(err)
    await client.close()
  }
}

module.exports = {
  run
}
