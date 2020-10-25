const { registerService } = require('../../services/auth/auth.service')

const CREATE_USER_SUCESS = 'User created successfully!'

async function registerController (req, res) {
  try {
    await registerService(req)
    return res.status(201).send({ message: CREATE_USER_SUCESS })
  } catch (error) {
    return res.status(400).send({ message: error.toString() })
  }
}

module.exports = {
  registerController
}
