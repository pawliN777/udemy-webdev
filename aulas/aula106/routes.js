const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

// Rotas da home
route.get('/', homeController.homePage);
route.post('/', homeController.postExec);

//Rotas do contato
route.get('/contato', contatoController.homePage);

module.exports = route;