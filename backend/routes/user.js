const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.get('/', userCtrl.findAll);
router.post('/', userCtrl.create);
// router.get('/:id', userCtrl.getOneUser);
// router.put('/:id', userCtrl.modifySauce);
// router.delete('/:id', userCtrl.deleteSauce);

module.exports = router;