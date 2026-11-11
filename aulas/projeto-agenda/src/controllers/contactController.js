import Contact from '../models/ContactModel.js';

export function index(request, response) {
  response.render('contact', {
    contact: {},
  });
}

export async function register(request, response) {
  try {
    const user = request.session.user;
    const accountId = user ? (user._id ? user._id.toString() : user.id) : null;

    if (!accountId) {
      request.flash('errors', ['You need to be logged to add a contact.']);
      request.session.save(() => response.redirect('/account'));
      return;
    }

    const contact = new Contact(request.body, request.session.user._id);
    await contact.register();

    if (contact.errors.length > 0) {
      request.flash('errors', contact.errors);
      request.session.save(() => response.redirect('/contact'));
      return;
    }

    request.flash('success', 'New contact added!');
    request.session.save(() => response.redirect('/home'));
    return;
  } catch (error) {
    console.error('Error to register a new contact', error);
    response.render('404');
  }
}

export async function info(request, response) {
  try {
    if (!request.params.id) return response.render('404');

    const contact = await Contact.getId(request.params.id);

    if (!contact) return response.render('404');

    response.render('contact', { contact: contact });
  } catch (error) {
    console.error('Error to render contact page', error);
  }
}

export async function edit(request, response) {
  try {
    if (!request.params.id) return response.render('404');

    const contact = new Contact(request.body);

    await contact.edit(request.params.id);

    if (contact.errors.length > 0) {
      request.flash('errors', contact.errors);
      request.session.save(() =>
        response.redirect(`/contact/${request.params.id}`),
      );
      return;
    }

    request.flash('success', 'Edited contact!');
    request.session.save(() => response.redirect('/home'));
    return;
  } catch (error) {
    console.error(error);
    response.render('404');
  }
}

export async function del(request, response) {
  try {
    if (!request.params.id) return response.render('404');

    const contato = await Contact.delete(request.params.id);

    if (!contato) return response.render('404');

    request.flash('success', 'Contact deleted!');
    request.session.save(() => response.redirect('/home'));
  } catch (error) {
    console.error('Could not delete the contact', error);
  }
}
