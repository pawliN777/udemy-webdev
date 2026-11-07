export function middlewareGlobal(request, response, next) {
  response.locals.errors = request.flash('errors');
  response.locals.success = request.flash('success');
  response.locals.user = request.session.user;
  next();
}

export function checkCsrfError(error, request, response, next) {
  if (error) {
    return response.render('404');
  }

  next();
}

export function csrfMiddleware(request, response, next) {
  response.locals.csrfToken = request.csrfToken();
  next();
}

export function loginRequired(request, response, next) {
  if (!request.session.user) {
    request.flash('errors', 'You need to be logged.');
    request.session.save(() => response.redirect('/account'));
    return;
  }

  next();
}
