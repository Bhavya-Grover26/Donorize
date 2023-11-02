const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const mongoose = require('mongoose');
const Org = mongoose.model('Org');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'You must be logged in' });
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'You must be logged in' });
    }

    const { _id } = payload;
    Org.findById(_id).then((orgData) => {
      if (orgData) {
        req.org = orgData; // Attach organization information to the request
        next();
      } else {
        return res.status(401).json({ error: 'Invalid organization' });
      }
    });
  });
};
