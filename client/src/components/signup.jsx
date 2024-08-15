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
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>Oh no!  Something happened to your signup credentials!!  Keep trying!  I promise</Alert>
            <Label htmlFor="username">Username</Label>
            <Input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={userFormData.username} required />
            if(!username) {
                res.Alert('Please enter a username')
            }
            <Label htmlFor="email">Email</Label>
            <Input type="text" placeholder='Email' name='email' onChange={handleInputChange} value={userFormData.email} required />
            {/* if(!email)  */}
                <Form.Input.Alert type= "invalid" variant= "filled" severity="warning">Please enter an email</Form.Input.Alert>
            <Label htmlFor="password">Password</Label>
            <Input type="text" placeholder="********" name='password' onChange={handleInputChange} value={userFormData.password} required />
            {/* if(!password)  */}
            <Form.Input.Alert type= "invalid" variant= "filled" severity="warning">Please enter a password</Form.Input.Alert>
            <Label htmlFor="age">Age</Label>
            <Input type="text" placeholder="Age" name="age" onChange={handleInputChange} value={userFormData.age} required />
            {/* if(!Age)  */}
            <Form.Input.Alert type= "invalid" variant= "filled" severity="warning">Please enter an age</Form.Input.Alert>
            <Label htmlFor="weight">Weight</Label>
            <Input type="text" placeholder="100 lbs" name="weight" onChange={handleInputChange} value={userFormData.weight} required />
            {/* if(!weight)  */}
            <Form.Input.Alert type= "invalid" variant= "filled" severity="warning">Please enter a weight</Form.Input.Alert>
            <Label htmlFor="height">Height</Label>
            <Input type="text" placeholder="5'0 ft" name="height" onChange={handleInputChange} value={userFormData.height} required />
            {/* if(!height)  */}
            <Form.Input.Alert type= "invalid" variant= "filled" severity="warning">Please enter a weight</Form.Input.Alert>
            <Label htmlFor="gender">Gender</Label>
            <select name="gender" id="gender">
                <option value="select">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            {/* if('select')  */}
            <Form.Input.Alert type= "invalid" variant= "filled" severity="warning">Please select a gender</Form.Input.Alert>
            <Button type="submit" disabled={!(userFormData.username && userFormData.email && userFormData.password && userFormData.age && userFormData.weight && userFormData.height && userFormData.gender)} variant='YAY!  YOU`RE LOGGED IN!'>Login</Button>
        </Form>
    )
}


