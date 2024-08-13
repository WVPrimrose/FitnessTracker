const Goal = require('../models/Goal');

// Add a new goal
exports.addGoal = async (req, res) => {
    try {
        const { userId, goalType, target, deadline } = req.body;
        
        const newGoal = new Goal({
            userId,
            goalType,
            target,
            deadline
        });

        const savedGoal = await newGoal.save();
        res.json(savedGoal);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

// Get goals for a user
exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({ userId: req.params.userId });
        res.json(goals);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

// Update a goal
exports.updateGoal = async (req, res) => {
    try {
        const { goalId } = req.params;
        const updatedGoal = await Goal.findByIdAndUpdate(goalId, req.body, { new: true });

        if (!updatedGoal) {
            return res.status(404).json({ msg: "Goal not found" });
        }

        res.json(updatedGoal);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

// Delete a goal
exports.deleteGoal = async (req, res) => {
    try {
        const { goalId } = req.params;
        const deletedGoal = await Goal.findByIdAndDelete(goalId);

        if (!deletedGoal) {
            return res.status(404).json({ msg: "Goal not found" });
        }

        res.json({ msg: "Goal deleted" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};
