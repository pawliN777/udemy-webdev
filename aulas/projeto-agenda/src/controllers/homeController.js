import Contact from '../models/ContactModel.js';

export async function index(request, response) {
  try {
    const contacts = await Contact.getContacts();
    response.render('index', { contacts });
  } catch (error) {
    response.render('404');
    console.error('Error to load contacts from database', error);
  }
}

export function redirect(request, response) {
  response.redirect('/home');
}
