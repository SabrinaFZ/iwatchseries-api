const { ObjectId } = require('mongodb')
const config = require('../../config/variables.config')

class UsersDao {
  static async setDb (conn) {
    const db = conn.db(config.mongoDb)
    this.usersCollection = await db.collection('users')
  }

  static async addUser (user) {
    try {
      await this.usersCollection.insertOne(user)
    } catch (err) {
      throw new Error(err)
    }
  }

  static async findUserByEmail (email) {
    try {
      const user = await this.usersCollection.findOne({
        email
      })
      return user
    } catch (err) {
      throw new Error()
    }
  }

  static async findUserById (id) {
    try {
      const user = await this.usersCollection.findOne({
        _id: ObjectId(id)
      })
      return user
    } catch (err) {
      throw new Error()
    }
  }

  static async updateUser (id, data) {
    try {
      await this.usersCollection.findOneAndUpdate(
        {
          _id: ObjectId(id)
        },
        {
          $set: data
        }
      )
    } catch (err) {
      throw new Error()
    }
  }

  static async deleteUser (id) {
    try {
      await this.usersCollection.remove(
        {
          _id: ObjectId(id)
        }
      )
    } catch (err) {
      throw new Error()
    }
  }
}

module.exports = UsersDao
