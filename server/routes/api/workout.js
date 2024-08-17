const express = require('express');
const router = express.Router();
const {addWorkout, getWorkouts, updateWorkout, deleteWorkout} = require('../../controllers/workoutController');
const auth = require('../../utils/auth.js');

router.post('/', auth, addWorkout);
router.get('/:userId', auth, getWorkouts);
router.put('/:workoutId', auth, updateWorkout);
router.delete('/:workoutId', auth, deleteWorkout);

module.exports = router;
