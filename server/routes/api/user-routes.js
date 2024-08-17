const express = require('express');
const router = express.Router();
const { createUser, login, getUser } = require('../../controllers/user-controllers.js');
const { addWorkout, getWorkouts, updateWorkout, deleteWorkout } = require('../../controllers/workoutController.js');
const auth = require('../../utils/auth.js');

router.post('/signup', createUser);
router.post('/login', login);
router.post('/dashboard', addWorkout);
router.post('/dashboard', updateWorkout);
router.get('/dashboard', getWorkouts);
router.delete('/dashboard', deleteWorkout);
router.get('/dashboard', getUser);

// router.get('/dashboard', auth, getUserDetails);

module.exports = router;
