import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import './GoalLog.css';

function GoalLog() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({
    goalType: '',
    target: '',
    deadline: ''
  });

  useEffect(() => {
    api.get('/goals')
      .then(response => setGoals(response.data))
      .catch(err => console.error('Error fetching goals:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({
      ...newGoal,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/goals', newGoal)
      .then(response => setGoals([...goals, response.data]))
      .catch(err => console.error('Error adding goal:', err));
  };

  const handleDelete = (goalId) => {
    api.delete(`/goals/${goalId}`)
      .then(() => setGoals(goals.filter(goal => goal._id !== goalId)))
      .catch(err => console.error('Error deleting goal:', err));
  };

  const handleComplete = (goalId) => {
    api.patch(`/goals/${goalId}`, { completed: true })
      .then(response => {
        setGoals(goals.map(goal => 
          goal._id === goalId ? { ...goal, completed: true } : goal
        ));
      })
      .catch(err => console.error('Error marking goal as completed:', err));
  };

  return (
    <div className="goal-log">
      <h2>Your Goals</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="goalType"
          placeholder="Goal Type (e.g., Weight Loss)"
          value={newGoal.goalType}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="target"
          placeholder="Target (e.g., Lose 10 lbs)"
          value={newGoal.target}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="deadline"
          placeholder="Deadline"
          value={newGoal.deadline}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Goal</button>
      </form>

      <ul>
        {goals.map(goal => (
          <li key={goal._id}>
            <div>
              <strong>{goal.goalType}</strong> - {goal.target} by {new Date(goal.deadline).toLocaleDateString()}
            </div>
            <button onClick={() => handleComplete(goal._id)}>
              {goal.completed ? 'Completed' : 'Mark as Completed'}
            </button>
            <button onClick={() => handleDelete(goal._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalLog;
