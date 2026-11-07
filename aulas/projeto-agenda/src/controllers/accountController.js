import Account from '../models/AccountModel.js';
import Contact from '../models/ContactModel.js';

export async function index(request, response) {
  const contacts = await Contact.getContacts();

  if (request.session.user) return response.render('index', { contacts });

  return response.render('account');
}

export async function register(request, response) {
  try {
    const account = new Account(request.body);
    await account.register();

    if (account.errors.length > 0) {
      request.flash('errors', account.errors);
      request.session.save(function () {
        return response.redirect('/account');
      });

      return;
    }

    request.flash('success', 'Account created successfully!');
    request.session.save(function () {
      return response.redirect('/account');
    });
  } catch (error) {
    console.log('Error to register a new user', error);
    return response.render('404');
  }
}

export async function login(request, response) {
  try {
    const account = new Account(request.body);
    await account.login();

    if (account.errors.length > 0) {
      request.flash('errors', account.errors);
      request.session.save(() => {
        return response.redirect('/account');
      });

      return;
    }

    request.flash('success', 'Logged successfully.');
    request.session.user = account.user;
    request.session.save(() => {
      return response.redirect('/account');
    });
  } catch (error) {
    console.log('Error to login', error);
    return response.render('404');
  }
}

export function logout(request, response) {
  request.session.destroy();
  response.redirect('/home');
}
