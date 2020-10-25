const { registerController } = require('../../controllers/auth/auth.controller')

module.exports = function (app) {
  app.post('/register', async (req, res) => {
    await registerController(req, res)
  })
}
