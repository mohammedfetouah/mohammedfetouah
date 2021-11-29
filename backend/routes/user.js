const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.get('/', userCtrl.showUsers);
router.post('/', userCtrl.createUser);
// router.get('/:id', userCtrl.getOneSauce);
// router.put('/:id', userCtrl.modifySauce);
// router.delete('/:id', userCtrl.deleteSauce);

module.exports = router;