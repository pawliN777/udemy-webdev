import express from 'express';
export const route = express.Router();

import * as homeController from './src/controllers/homeController.js';
import * as accountController from './src/controllers/accountController.js';
import * as contactController from './src/controllers/contactController.js';

import { loginRequired } from './src/middlewares/middleware.js';

// Rotas da home
route.get('/home', homeController.index);
route.get('/', homeController.redirect);

// Rotas de account
route.get('/account', accountController.index);
route.post('/account/register', accountController.register);
route.post('/account/login', accountController.login);
route.get('/account/logout', accountController.logout);

// Rotas de contact
route.get('/contact', loginRequired, contactController.index);
route.post('/contact/register', loginRequired, contactController.register);
route.get('/contact/info/:id', loginRequired, contactController.info);
route.post('/contact/edit/:id', loginRequired, contactController.edit);
route.get('/contact/delete/:id', loginRequired, contactController.del);
