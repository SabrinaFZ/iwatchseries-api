const UsersDao = require('../../dao/user/user.dao')
const UserDTO = require('../../dto/user/user.dto')
const User = require('../../models/user/user.model')

function UserService () {
  async function findUser (req) {
    try {
      const user = await UsersDao.findUserById(req.params.id)
      if (!user) {
        throw new Error('User not found!')
      }
      return new UserDTO({
        id: user._id,
        email: user.email,
        name: user.name,
        bio: user.bio,
        country: user.bio
      })
    } catch (error) {
      throw new Error(error)
    }
  }

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
    findUser,
    updateUser,
    deleteUser
  }
}

module.exports = UserService()
