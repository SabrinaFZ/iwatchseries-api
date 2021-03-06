const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth/auth.middleware')
const listMiddleware = require('../middlewares/list/list.middleware')

const authRoutes = require('./auth/auth.route')
const usersRoutes = require('./users/users.route')
const listsRoutes = require('./lists/lists.route')

router.use('/auth', authRoutes)
router.use('/users', authMiddleware, usersRoutes)
router.use('/lists', [authMiddleware, listMiddleware], listsRoutes)

module.exports = router
