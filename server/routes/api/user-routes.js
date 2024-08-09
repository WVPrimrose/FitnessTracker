const router = require('express').Router();
const {
  createUser,
  saveWorkout,
  login,
} = require('../../controllers/user-controllers');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware, saveWorkout);

router.route('/login').post(login);

module.exports = router;
