import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import mongoose from 'mongoose';

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('ready');
  })
  .catch((error) => {
    console.error('Error to connect to database', error);
  });

import session from 'express-session';
import MongoStore from 'connect-mongo';
import flash from 'connect-flash';
import { route } from './routes.js';
import helmet from 'helmet';
import csrf from 'csurf';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} from './src/middlewares/middleware.js';

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());

// Our middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(route);

app.on('ready', () => {
  app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('Server is running on port 3000');
  });
});
