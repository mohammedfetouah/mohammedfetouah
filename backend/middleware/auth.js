const jwt = require('jsonwebtoken');
const app = require('../app');





module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    if (!req.query.userId || parseInt(req.query.userId) !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch(error) {
    console.log(error)
    res.status(401).json({
      error: 'Erreur server'
    });
  }
};
