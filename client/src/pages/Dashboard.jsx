// importing packages
import { useState } from "react";
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { GoalLog } from '../components/GoalLog';
import { WorkoutLog } from '../components/WorkoutLog'

const Dashboard = () => {
    const { profileId } = useParams();
    const { loading, data } = useQuery(singleProfile, {
        variables: { profileId: profileId },
    });

    const profile = data?.profile || {};

    if(loading) {
        return <div>
            <h1>LOADING...</h1>
            <p>I know.  Waiting is hard.</p>
        </div>;
    }

    return (
        <>
        <h1>My Dashboard</h1>
        <div>
            <h2>My Current Goals</h2>
            {/* If we have goals already */}
            {GoalLog? (
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                // No current goals
            ) : (
                <ul></ul>
            )}
        </div>
        <div>
            <h2>My Current Workout Logs</h2>
            {/* If we have workout logs already */}
            {WorkoutLog? (
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                // If we have no workout logs
            ) : (
                <ul></ul>
            )}
        </div>
        <div>
            <Link to ="/GoalLog">
            <button><h2>Create a New Goal</h2></button>
            </Link>
        </div>
        <div>
            <Link to ="/WorkoutLog">
            <button><h2>Create a New Workout Log</h2></button>
            </Link>
        </div>
        </>
    )
}

export default Dashboard