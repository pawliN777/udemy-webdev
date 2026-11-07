import express from 'express';
export const router = express.Router();

import * as homeController from './src/controllers/homeController.js';
import * as accountController from './src/controllers/accountController.js';
import * as contactController from './src/controllers/contactController.js';

import { loginRequired } from './src/middlewares/middleware.js';

// Rotas da home
router.get('/home', homeController.index);
router.get('/', homeController.redirect);

// Rotas de login
router.get('/account', accountController.index);
router.post('/account/register', accountController.register);
router.post('/account/login', accountController.login);
router.get('/account/logout', accountController.logout);

// Rotas de contato
router.get('/contact', loginRequired, contactController.index);
router.post('/contact/register', loginRequired, contactController.register);
router.get('/contact/info/:id', loginRequired, contactController.info);
router.post('/contact/edit/:id', loginRequired, contactController.edit);
router.get('/contact/delete/:id', loginRequired, contactController.del);
