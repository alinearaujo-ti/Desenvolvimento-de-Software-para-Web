const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProductsController = require('./controllers/ProductsController') 
const DesejoController = require('./controllers/DesejoController')


//rotas do usuário corno
routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

// rotas do produto
routes.get('/products', ProductsController.index)
routes.post('/products', ProductsController.create)
routes.put('/products/:id', ProductsController.update)
routes.delete('/products/:id', ProductsController.delete)

// rotas da lista de desejo
routes.get('/list', DesejoController.index)
routes.post('/list', DesejoController.create)
routes.delete('/users/:id', DesejoController.delete)

module.exports = routes