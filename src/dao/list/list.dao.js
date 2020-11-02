const { ObjectId } = require('mongodb')
const config = require('../../config/variables.config')

class ListDao {
  static async setDb (conn) {
    const db = conn.db(config.mongoDb)
    this.listsCollection = await db.collection('lists')
  }

  static async addList (list) {
    try {
      await this.listsCollection.insertOne({
        name: list.name,
        user_id: ObjectId(list.user_id),
        series: list.series
      })
    } catch (err) {
      throw new Error(err)
    }
  }

  static async findListById (id) {
    try {
      const list = await this.listsCollection.findOne({
        _id: ObjectId(id)
      })
      return list
    } catch (err) {
      throw new Error(err)
    }
  }

  static async deleteList (id) {
    try {
      await this.listsCollection.remove(
        {
          _id: ObjectId(id)
        }
      )
    } catch (err) {
      throw new Error()
    }
  }

  static async updateList (id, data) {
    try {
      await this.listsCollection.findOneAndUpdate(
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
}

module.exports = ListDao
