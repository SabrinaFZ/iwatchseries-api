const { registerController, loginController } = require('../../controllers/auth/auth.controller')

module.exports = function (app) {
  app.post('/register', async (req, res) => {
    await registerController(req, res)
  })
  app.post('/login', async(req, res) => {
    await loginController(req, res)
  })
}
