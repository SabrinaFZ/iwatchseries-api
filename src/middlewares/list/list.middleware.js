const express = require('express')
const router = express.Router()
const ListDao = require('../../dao/list/list.dao')

router.use(async (req, res, next) => {
  try {
    const list = await ListDao.findListById(req.params.id)
    if (!list) {
      next()
      return
    }
    if (list.user_id.toString() !== req.userId) {
      return res.status(401).send({ message: 'Unauthorized!' })
    }
    next()
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = router
