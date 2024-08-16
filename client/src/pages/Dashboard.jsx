// importing packages
import { useState } from "react";
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'

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
        </div>
        <div>
            <h2>My Current Workout Logs</h2>
        </div>
        <div>
            <button><h2>Create a New Goal</h2></button>
        </div>
        <div>
            <button><h2>Create a New Workout Log</h2></button>
        </div>
        </>
    )
}

export default Dashboard