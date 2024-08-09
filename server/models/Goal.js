const mongoose = require('mongoose');

//Define the Goal shcema
const GoalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  goalType: {
    type: String,
    enum: ['weight loss', 'muscle gain', 'endurance', 'other'],
    required: true
  },
  target: {
    type: Number,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Goal', GoalSchema);
