const dotenv = require('dotenv')
const env = dotenv.config()

if (env.error) {
  throw new Error('Could not find .env file')
}

module.exports = {
  env: process.env.NODE_ENV || 'development',
  host: process.env.host || 'http://localhost',
  port: process.env.port || '3000',
  mongoUri: process.env.MONGO_CLIENT_URI,
  mongoDb: process.env.MONGO_DB,
  mongoUser: process.env.MONGO_USER,
  mongoPassword: process.env.MONGO_PASSWORD
}
