const ListService = require('../../services/lists/lists.service')

function ListController () {
  async function getList (req, res) {
    try {
      const listDTO = await ListService.getList(req)
      return res.status(200).send(listDTO)
    } catch (error) {
      return res.status(500).send({ message: error.message || 'Ups, an internal error have occurred!' })
    }
  }

  async function updateList (req, res) {
    try {
      await ListService.updateList(req)
      return res.status(200).send('Updated list successfully!')
    } catch (error) {
      return res.status(500).send('Ups, an internal error have occurred!')
    }
  }

  async function deleteList (req, res) {
    try {
      await ListService.deleteList(req)
      return res.status(200).send('Deleted list successfully!')
    } catch (error) {
      return res.status(500).send({ message: error.message || 'Ups, an internal error have occurred!' })
    }
  }

  async function addList (req, res) {
    try {
      await ListService.addList(req)
      return res.status(201).send({ message: 'List created successfully!' })
    } catch (error) {
      return res.status(400).send({ message: error.toString() })
    }
  }

  return {
    getList,
    addList,
    deleteList,
    updateList
  }
}

module.exports = ListController()
