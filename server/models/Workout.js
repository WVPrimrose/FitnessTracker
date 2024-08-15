const mongoose = require('mongoose');

// Define the Workout schema
const WorkoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  type: {
    type: String,
    enum: ['cardio', 'strength training', 'flexibility', 'other'],
    required: true
  },
  duration: {
    type: Number,
    required: true,
    min: 0 
  },
  caloriesBurned: {
    type: Number,
    required: true,
    min: 0 
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});
const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = Workout;
