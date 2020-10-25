const bcrypt = require('bcryptjs')
const User = require('../../models/user/user.model')
const UsersDao = require('../../dao/user/user.dao')

async function registerService (req) {
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
  })
  try {
    await UsersDao.addUser(user)
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  registerService
}
