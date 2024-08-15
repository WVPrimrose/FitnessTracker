const { Workout } = require('../models');

// Add a new workout
module.exports = {
    async addWorkout(req, res) {
        try {
            const { userId, date, type, duration, caloriesBurned, notes } = req.body;

            const newWorkout = new Workout({
                userId,
                date,
                type,
                duration,
                caloriesBurned,
                notes
            });

            const savedWorkout = await newWorkout.save();
            res.json(savedWorkout);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    },

    // Get workouts for a user
    async getWorkouts(req, res) {
        try {
            const workouts = await Workout.find({ userId: req.params.userId });
            res.json(workouts);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    },

    // Update a workout
    async updateWorkout(req, res) {
        try {
            const { workoutId } = req.params;
            const updatedWorkout = await Workout.findByIdAndUpdate(workoutId, req.body, { new: true });

            if (!updatedWorkout) {
                return res.status(404).json({ msg: "Workout not found" });
            }

            res.json(updatedWorkout);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    },

    // Delete a workout
    async deleteWorkout(req, res) {
        try {
            const { workoutId } = req.params;
            const deletedWorkout = await Workout.findByIdAndDelete(workoutId);

            if (!deletedWorkout) {
                return res.status(404).json({ msg: "Workout not found" });
            }

            res.json({ msg: "Workout deleted" });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
};
