// importing packages
import { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { createUser } from "../../utils/API";
// signup form function
const SignupForm = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', age: '', weight: '', height: '', gender: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value)
        setUserFormData({ ...userFormData, [name]: value })
    }
    
    // handles the form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await createUser(userFormData)

            // if (!response.ok) {
            //     throw new Error('Oh no!  Something went wrong!')
            // }

            const { token, user } =  response.data;
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
            age: '',
            weight: '',
            height: '',
            gender: '',
        });
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>Oh no!  Something happened to your signup credentials!!  Keep trying!  I promise</Alert>

            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control type="text" placeholder="Username" name="username" onChange={handleInputChange} value={userFormData.username} required />
            {/* if(!username)  */}
            {/* <Form.Control.Feedback type='invalid'>Please enter a username</Form.Control.Feedback> */}

            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="text" placeholder='Email' name='email' onChange={handleInputChange} value={userFormData.email} required />
            {/* if(!email)  */}
            {/* <Form.Control.Feedback type='invalid'>Please enter an email</Form.Control.Feedback> */}

            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" placeholder="********" name='password' onChange={handleInputChange} value={userFormData.password} required />
            {/* if(!password)  */}
            {/* <Form.Control.Feedback type='invalid'>Please enter a password</Form.Control.Feedback> */}

            <Form.Label htmlFor="age">Age</Form.Label>
            <Form.Control type="text" placeholder="Age" name="age" onChange={handleInputChange} value={userFormData.age} required />
            {/* <Form.Control.Feedback type='invalid'>Please enter an age!</Form.Control.Feedback> */}
            {/* if(!Age)  */}

            <Form.Label htmlFor="weight">Weight</Form.Label>
            <Form.Control type="text" placeholder="100 lbs" name="weight" onChange={handleInputChange} value={userFormData.weight} required />
            {/* if(!weight)  */}
            {/* <Form.Control.Feedback type='invalid'>Please enter a weight</Form.Control.Feedback> */}
            <Form.Label htmlFor="height">Height</Form.Label>
            <Form.Control type="text" placeholder="5'0 ft" name="height" onChange={handleInputChange} value={userFormData.height} required />
            {/* if(!height)  */}
            {/* <Form.Control.Feedback type='invalid'>Please enter a height</Form.Control.Feedback> */}
            <Form.Label htmlFor="gender">Gender</Form.Label>
            <select name="gender" id="gender" onChange={handleInputChange} value={userFormData.gender} >
                <option value="select">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            {/* if('select')  */}
            {/* <Form.Control.Feedback type='invalid'>Please select a gender</Form.Control.Feedback> */}
            <Button type="submit" disabled={!(userFormData.username && userFormData.email && userFormData.age && userFormData.height && userFormData.gender && userFormData.password)} variant='YAY!  YOU`RE LOGGED IN!'>Login</Button>
        </Form>
    )
}


export default SignupForm;