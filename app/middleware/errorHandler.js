// errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err.stack || err.message || err);
  res.status(500).json({ error: 'Internal Server Error' });
};