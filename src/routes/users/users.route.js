const express = require('express')
const router = express.Router()
const { updateUserController, deleteUserController } = require('../../controllers/users/users.controller')

router.put('/:id', async (req, res) => {
  await updateUserController(req, res)
})

router.delete('/:id', async (req, res) => {
  await deleteUserController(req, res)
})

module.exports = router
