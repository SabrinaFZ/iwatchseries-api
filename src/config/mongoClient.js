const { MongoClient } = require('mongodb')
const config = require('./variables')
const schemas = require('../schema')

const uri = config.mongoUri + '/' + config.mongoDb
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  maxPoolSize: 5,
  auth: {
    user: config.mongoUser,
    password: config.mongoPassword
  }
})

async function run () {
  try {
    const conn = await client.connect()
    console.log('Connected successfully to mongo instance')
    conn.db(config.mongoDb).listCollections().toArray((err, collections) => {
      if (err) {
        throw new Error(err)
      }
      if (!collections.length) {
        schemas.userSchema(conn)
        schemas.listSchema(conn)
      }
    })
  } catch (err) {
    await client.close()
    throw new Error(err)
  }
}

module.exports = {
  run
}
