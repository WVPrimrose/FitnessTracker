const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');
const auth = require('../utils/auth.js');

router.post('/', auth, workoutController.addWorkout);
router.get('/:userId', auth, workoutController.getWorkouts);
router.put('/:workoutId', auth, workoutController.updateWorkout);
router.delete('/:workoutId', auth, workoutController.deleteWorkout);

module.exports = router;
