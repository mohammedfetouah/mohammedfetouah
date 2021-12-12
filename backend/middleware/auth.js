const jwt = require('jsonwebtoken');
const app = require('../app');





module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token)
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    console.log(decodedToken)
    const userId = decodedToken.userId;
    console.log(req.body.userId)
    if (!req.body.userId || parseInt(req.body.userId) !== userId) {
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
