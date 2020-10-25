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
}

module.exports = UsersDao
