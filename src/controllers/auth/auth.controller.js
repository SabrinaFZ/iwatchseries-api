const { registerService, loginService } = require('../../services/auth/auth.service')

const CREATE_USER_SUCESS = 'User created successfully!'

async function registerController (req, res) {
  try {
    await registerService(req)
    return res.status(201).send({ message: CREATE_USER_SUCESS })
  } catch (error) {
    return res.status(400).send({ message: error.toString() })
  }
}

async function loginController (req, res) {
  try {
    const authDTO = await loginService(req)
    return res.status(200).send(authDTO)
  } catch (error) {
    return res.status(500).send({ message: error.message || 'Ups, an internal error have occurred!' })
  }
}

module.exports = {
  registerController,
  loginController
}
