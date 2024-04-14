const express = require('express');
const router = express.Router();
const userController = require('./controller');

router.post('/createUser', userController.createUser);
router.get('/userListing', userController.getAllUsers);
router.get('/getUserById', userController.getUserById);
router.put('/updateUserId', userController.updateUser);
router.delete('/deleteUserID', userController.deleteUser);

module.exports = router;
