const config = require('../config/variables.config')

const userSchema = async conn => {
  const db = conn.db(config.mongoDb)
  await db
    .createCollection('users', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['email', 'password'],
          properties: {
            _id: {
              bsonType: 'objectId'
            },
            email: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            password: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            name: {
              bsonType: 'string'
            },
            bio: {
              bsonType: 'string'
            },
            country: {
              bsonType: 'string',
              maxLength: 2
            }
          }
        }
      }
    })
  await db.collection('users')
    .createIndex({ email: 0 | 1 }, { unique: true })

  console.log('User schema created successfully!')
}

module.exports = userSchema
