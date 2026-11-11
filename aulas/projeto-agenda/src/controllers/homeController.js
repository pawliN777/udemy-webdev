import Contact from '../models/ContactModel.js';

export async function index(request, response) {
  try {
    const user = request.session.user;
    const accountId = user ? (user._id ? user._id.toString() : user.id) : null;

    const contacts = accountId ? await Contact.getContacts(accountId) : [];

    response.render('index', { contacts });
  } catch (error) {
    response.render('404');
    console.error('Error to load contacts from database', error);
  }
}

export function redirect(request, response) {
  response.redirect('/home');
}
