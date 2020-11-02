const express = require('express')
const router = express.Router()
const { updateUserController } = require('../../controllers/users/users.controller')

router.put('/:id', async (req, res) => {
  await updateUserController(req, res)
})

module.exports = router
