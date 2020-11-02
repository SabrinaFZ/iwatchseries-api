const AuthService = require('../../services/auth/auth.service')

function AuthController () {
  async function register (req, res) {
    try {
      await AuthService.register(req)
      return res.status(201).send({ message: 'User created successfully!' })
    } catch (error) {
      return res.status(400).send({ message: error.toString() })
    }
  }

  async function login (req, res) {
    try {
      const authDTO = await AuthService.login(req)
      return res.status(200).send(authDTO)
    } catch (error) {
      return res.status(500).send({ message: error.message || 'Ups, an internal error have occurred!' })
    }
  }

  return {
    register,
    login
  }
}

module.exports = AuthController()
