const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/users/users.controller')

router.get('/:id', async (req, res) => {
  await UserController.getUser(req, res)
})

router.put('/:id', async (req, res) => {
  await UserController.updateUser(req, res)
})

router.delete('/:id', async (req, res) => {
  await UserController.deleteUser(req, res)
})

module.exports = router
