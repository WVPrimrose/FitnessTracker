// importing packages
import { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { createUser } from '../utils/API';
import Auth from '../utils/auth';

// signup form function
const SignupForm = () => {
    const [userFormData, setUserForm] = useState({ username: '', email: '', password: '', age: Number, weight: number, height: number, gender: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value })
    }
    // handles the form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await loginUser(userFormData);

            if (!response.ok) {
                throw new Error('Oh no!  Something went wrong!')
            }

            const { token, user } = await res.json();
            console.log(user);
            Auth.login(token)

        } catch (error) {
            console.log(error)
            setShowAlert(true)
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
            age: number,
            weight: number,
            height: number,
            gender: '',
        });
    }

    return (
        <form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>Oh no!  Something happened to your signup credentials!!  Keep trying!  I promise</Alert>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={userFormData.username} required />
            if(!username) {
                res.Alert('Please enter a username')
            }
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='Email' name='email' onChange={handleInputChange} value={userFormData.email} required />
            if(!email) {
                res.Alert('Please enter an email')
            }
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="********" name='password' onChange={handleInputChange} value={userFormData.password} required />
            if(!password) {
                res.Alert('Please enter a password')
            }
            <label htmlFor="age">Age</label>
            <input type="text" placeholder="Age" name="age" onChange={handleInputChange} value={userFormData.age} required />
            if(!Age) {
                res.Alert('Please enter an Age')
            }
            <label htmlFor="weight">Weight</label>
            <input type="text" placeholder="100 lbs" name="weight" onChange={handleInputChange} value={userFormData.weight} required />
            if(!weight) {
                res.Alert('Please enter a weight')
            }
            <label htmlFor="height">Height</label>
            <input type="text" placeholder="5'0 ft" name="height" onChange={handleInputChange} value={userFormData.height} required />
            if(!height) {
                res.Alert('Please enter a height')
            }
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
                <option value="select">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            if('select') {
                res.Alert('Please enter a gender')
            }
            <button type="submit" disabled={!(userFormData.username && userFormData.email && userFormData.password && userFormData.age && userFormData.weight && userFormData.height && userFormData.gender)} variant='YAY!  YOU`RE LOGGED IN!'>Login</button>
        </form>
    )
}


