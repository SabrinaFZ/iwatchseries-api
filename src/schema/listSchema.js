const config = require('../config/variables')

const listSchema = async conn => {
  const db = conn.db(config.mongoDb)
  await db.createCollection('lists', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'user_id'
        ],
        properties: {
          _id: {
            bsonType: 'objectId'
          },
          name: {
            bsonType: 'string'
          },
          series: {
            bsonType: 'array'
          },
          user_id: {
            bsonType: 'objectId'
          }
        }
      }
    }
  })
  console.log('List schema created successfully!')
}

module.exports = listSchema
