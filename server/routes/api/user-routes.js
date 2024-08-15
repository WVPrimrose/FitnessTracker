const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-controllers');
const auth = require('../utils/auth.js');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', auth, userController.getUserDetails);

module.exports = router;
