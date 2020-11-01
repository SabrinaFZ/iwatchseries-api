const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/user/user.model')
const UsersDao = require('../../dao/user/user.dao')
const config = require('../../config/variables.config')
const AuthDTO = require('../../dto/auth/auth.dto')

async function registerService (req) {
  try {
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password)
    })
    await UsersDao.addUser(user)
  } catch (error) {
    throw new Error(error)
  }
}

async function loginService (req) {
  try {
    if (!req.body.email && !req.body.password) {
      throw new Error({
        status: 400,
        errorMessage: 'No username and/or password were provided. Try again!'
      })
    }
    const user = await UsersDao.findUser(req.body.email)
    if (!user) {
      throw new Error('User not found!')
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      throw new Error('Invalid email and/or password. Try again!')
    }
    const accessToken = jwt.sign({ id: user._id }, config.jwtSecret)

    return new AuthDTO({
      id: user._id,
      accessToken
    })
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  registerService,
  loginService
}
