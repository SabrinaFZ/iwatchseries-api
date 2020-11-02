const { updateUserService } = require('../../services/users/users.service')

async function updateUserController (req, res) {
  try {
    await updateUserService(req)
    return res.status(200).send('Updated user successfully!')
  } catch (error) {
    return res.status(500).send('Ups, an internal error have occurred!')
  }
}

module.exports = {
  updateUserController
}