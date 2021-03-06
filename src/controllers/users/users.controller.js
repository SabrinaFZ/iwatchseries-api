const UserService = require('../../services/users/users.service')

function UserController () {
  async function getUser (req, res) {
    try {
      const userDTO = await UserService.findUser(req)
      return res.status(200).send(userDTO)
    } catch (error) {
      return res.status(500).send({ message: error.message || 'Ups, an internal error have occurred!' })
    }
  }

  async function updateUser (req, res) {
    try {
      await UserService.updateUser(req)
      return res.status(200).send('Updated user successfully!')
    } catch (error) {
      return res.status(500).send('Ups, an internal error have occurred!')
    }
  }

  async function deleteUser (req, res) {
    try {
      await UserService.deleteUser(req)
      return res.status(200).send('Deleted user successfully!')
    } catch (error) {
      return res.status(500).send('Ups, an internal error have occurred!')
    }
  }

  return {
    getUser,
    updateUser,
    deleteUser
  }
}

module.exports = UserController()
