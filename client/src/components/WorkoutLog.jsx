import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import './WorkoutLog.css';

function WorkoutLog() {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    type: '',
    duration: '',
    caloriesBurned: '',
    notes: ''
  });

  useEffect(() => {
    api.get('/workouts')
      .then(response => setWorkouts(response.data))
      .catch(err => console.error('Error fetching workouts:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWorkout({
      ...newWorkout,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/workouts', newWorkout)
      .then(response => setWorkouts([...workouts, response.data]))
      .catch(err => console.error('Error adding workout:', err));
  };

  const handleComplete = (id) => {
    api.patch(`/workouts/${id}`, { completed: true })
      .then(response => {
        setWorkouts(workouts.map(workout => 
          workout._id === id ? { ...workout, completed: true } : workout
        ));
      })
      .catch(err => console.error('Error marking workout as completed:', err));
  };

  return (
    <div className="workout-log">
      <h2>Your Workouts</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          placeholder="Workout Type"
          value={newWorkout.type}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={newWorkout.duration}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="caloriesBurned"
          placeholder="Calories Burned"
          value={newWorkout.caloriesBurned}
          onChange={handleChange}
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={newWorkout.notes}
          onChange={handleChange}
        />
        <button type="submit">Add Workout</button>
      </form>

      <ul>
        {workouts.map(workout => (
          <li key={workout._id}>
            {workout.type} - {workout.duration} minutes - {workout.caloriesBurned} calories
            <p>{workout.notes}</p>
            <button onClick={() => handleComplete(workout._id)}>
              {workout.completed ? 'Completed' : 'Mark as Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutLog;
