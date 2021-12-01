const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/login', userCtrl.login);
router.post('/signup', userCtrl.signup);
// router.get('/:id', userCtrl.getOneUser);
// router.put('/:id', userCtrl.modifySauce);
// router.delete('/:id', userCtrl.deleteSauce);

module.exports = router;