import { setDate, setElement } from './helpers.js';

setElement('#timescreen', `<h3>${setDate()}</h3>`);