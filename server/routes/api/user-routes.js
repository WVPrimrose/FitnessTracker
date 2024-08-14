const express = require('express');
const router = express.Router();
const { createUser, login } = require('../../controllers/user-controllers.js');
const auth = require('../../utils/auth.js');

router.post('/register', createUser);
router.post('/login', login);
// router.get('/me', auth, getUserDetails);

module.exports = router;
