exports.homePage = (req, res) => {
  res.render('index');
};

exports.postExec = (req, res) => {
  res.send('Nova rota de post');
};