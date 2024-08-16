const express = require('express');
const router = express.Router();
const {addGoal, getGoals, updateGoal, deleteGoal} = require('../../controllers/goalController');
const auth = require('../../utils/auth.js');

router.post('/', auth, addGoal);
router.get('/:userId', auth, getGoals);
router.put('/:goalId', auth, updateGoal);
router.delete('/:goalId', auth, deleteGoal);

module.exports = router;
