const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
  res.render('contato', {
    contato: {},
  });
};

exports.register = async function (req, res) {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('/contato/index'));
      return;
    }

    req.flash('success', 'Contato adicionado!');
    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contato._id}`),
    );
    return;
  } catch {
    res.render('404');
  }
};

exports.editIndex = async function (req, res) {
  try {
    if (!req.params.id) return res.render('404');

    const contato = await Contato.buscaPorId(req.params.id);

    if (!contato) return res.render('404');

    res.render('contato', { contato });
  } catch (e) {
    throw new Error('Erro', e);
  }
};

exports.edit = async function (req, res) {
  try {
    if (!req.params.id) return res.render('404');

    const contato = new Contato(req.body);

    await contato.edit(req.params.id);

    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect(`/contato/index/${req.params.id}`));
      return;
    }

    req.flash('success', 'Contato editado!');
    req.session.save(() => res.redirect(`/contato/index/${req.params.id}`));
    return;
  } catch(e) {
    console.error(e);
    res.render('404');
  }
};
