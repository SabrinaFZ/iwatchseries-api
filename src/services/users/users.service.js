const UsersDao = require('../../dao/user/user.dao')
const User = require('../../models/user/user.model')

async function updateUserService (req, res) {
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

module.exports = {
  updateUserService
}
