exports.homePage = (req, res) => {
  res.render('index');
  return;
};

exports.postExec = (req, res) => {
  res.send(req.body);
  return;
};