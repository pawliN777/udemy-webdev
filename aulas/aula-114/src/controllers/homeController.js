exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Este é o título',
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

exports.postExec = (req, res) => {
  res.send(req.body);
  return;
};
