const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goalController');
const auth = require('../utils/auth.js');

router.post('/', auth, goalController.addGoal);
router.get('/:userId', auth, goalController.getGoals);
router.put('/:goalId', auth, goalController.updateGoal);
router.delete('/:goalId', auth, goalController.deleteGoal);

module.exports = router;
