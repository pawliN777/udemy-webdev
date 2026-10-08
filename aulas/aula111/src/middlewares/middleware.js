exports.globalMiddleware = (req, res, next) => {
  next();
};

exports.anotherMiddleware = (req, res, next) => {
  console.log('Outro middleware');
  next();
};