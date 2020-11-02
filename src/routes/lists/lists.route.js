const express = require('express')
const router = express.Router()
const ListController = require('../../controllers/lists/lists.controller')

router.get('/:id', async (req, res) => {
  await ListController.getList(req, res)
})

router.put('/:id', async (req, res) => {
  await ListController.updateList(req, res)
})

router.delete('/:id', async (req, res) => {
  await ListController.deleteList(req, res)
})

router.post('/', async (req, res) => {
  await ListController.addList(req, res)
})

module.exports = router
