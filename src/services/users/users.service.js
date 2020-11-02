const UsersDao = require('../../dao/user/user.dao')
const User = require('../../models/user/user.model')

function UserService () {
  async function updateUser (req) {
    try {
      const user = new User({
        name: req.body.name,
        bio: req.body.bio,
        country: req.body.country
      })
      await UsersDao.updateUser(req.params.id, user)
    } catch (error) {
      throw new Error(error)
    }
  }

  async function deleteUser (req) {
    try {
      await UsersDao.deleteUser(req.params.id)
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    updateUser,
    deleteUser
  }
}

module.exports = UserService()
