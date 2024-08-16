// importing packages
import { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { loginUser } from "../../utils/API";
import Auth from '../../utils/auth'
// import Alert from '@mui/material/Alert';
// login form function
const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({...userFormData, [name]:value })
    }
    // handles the form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
        
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
            email: '',
            password: '',
        });
    }

    return(
        <>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>Oh no!  Something happened to your login credentials!!  Keep trying!  I promise</Alert>

            {/* Form Email Input */}
            <Form.Group className='mb-3'>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control 
            type='text' 
            placeholder= 'Email' 
            name='email' 
            onChange={handleInputChange} 
            value={userFormData.email} 
            required />
            {/* Form Feedback if no email */}
            <Form.Control.Feedback type='invalid'>Email required!</Form.Control.Feedback>
            </Form.Group>

            {/* Form Password Input*/}
            <Form.Group className='mb-3'>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control 
            type='password' 
            placeholder='********' 
            name='password' 
            onChange={handleInputChange} 
            value={userFormData.password} 
            required />
            {/* Form Feedback if no Password */}
            <Form.Control.Feedback type= 'invalid'>Please enter a password</Form.Control.Feedback>
            </Form.Group>
            {/* Submit Button for Form */}
            <Button
            disabled={!(userFormData.email && userFormData.password)} 
            type='submit'  
            variant='YAY!  YOU`RE LOGGED IN!'>Login</Button>
        </Form>
        </>
    );
};
 

export default LoginForm;