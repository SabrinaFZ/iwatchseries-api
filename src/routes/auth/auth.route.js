const express = require('express')
const router = express.Router()
const AuthController = require('../../controllers/auth/auth.controller')

router.post('/register', async (req, res) => {
  await AuthController.register(req, res)
})

router.post('/login', async (req, res) => {
  await AuthController.login(req, res)
})

module.exports = router
