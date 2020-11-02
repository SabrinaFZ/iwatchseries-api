const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('../../config/variables.config')

router.use((req, res, next) => {
  const accessToken = req.headers.authorization

  if (!accessToken) {
    return res.status(403).send({ message: 'No token provided!' })
  }

  jwt.verify(accessToken.replace('Bearer ', ''), config.jwtSecret, (err) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' })
    }
    next()
  })
})

module.exports = router
