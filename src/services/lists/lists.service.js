const ListDao = require('../../dao/list/list.dao')
const ListDTO = require('../../dto/list/list.dto')
const List = require('../../models/list/list.model')

function ListService (req) {
  async function getList (req) {
    try {
      const list = await ListDao.findListById(req.params.id)
      if (!list) {
        throw new Error('List not found!')
      }
      return new ListDTO({
        id: list._id,
        name: list.name,
        series: list.series
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  async function updateList (req) {
    try {
      const list = new List({
        name: req.body.name,
        series: req.body.series
      })
      await ListDao.updateList(req.params.id, list)
    } catch (error) {
      throw new Error(error)
    }
  }

  async function deleteList (req) {
    try {
      const list = await ListDao.findListById(req.params.id)
      if (!list) {
        throw new Error('No List found!')
      }
      await ListDao.deleteList(req.params.id)
    } catch (error) {
      throw new Error(error)
    }
  }

  async function addList (req) {
    try {
      let list = await ListDao.findListById(req.params.id)
      if (!list) {
        throw new Error('No List found!')
      }
      list = new List({
        name: req.body.name || 'All',
        userId: req.userId,
        series: []
      })
      await ListDao.addList(list)
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    getList,
    addList,
    deleteList,
    updateList
  }
}

module.exports = ListService()
