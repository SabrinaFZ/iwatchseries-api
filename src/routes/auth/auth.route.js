const express = require('express')
const router = express.Router()
const { registerController, loginController } = require('../../controllers/auth/auth.controller')

router.post('/register', async (req, res) => {
  await registerController(req, res)
})

router.post('/login', async (req, res) => {
  await loginController(req, res)
})

module.exports = router
