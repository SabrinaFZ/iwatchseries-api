const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth/auth.middleware')
const authRoutes = require('./auth/auth.route')
const usersRoutes = require('./users/users.route')

router.use('/auth', authRoutes)
router.use('/users', authMiddleware, usersRoutes)

module.exports = router
