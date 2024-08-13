// importing packages
import { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { loginUser } from "../../utils/API";
import Auth from '../../utils/auth'
// login form function
const LoginForm = () => {
    const [userFormData, setUserForm] = useState({ email: '', password: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({...userFormData, [name]:value })
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
            email: '',
            password: '',
        });
    }

    return(
        <form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert}>Oh no!  Something happened to your login credentials!!  Keep trying!  I promise</Alert>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder= 'Email' name='email' onChange={handleInputChange} value={userFormData.email} required />
            if(!email) {
                res.Alert('Please enter an email')
            }
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="********" name='password' onChange={handleInputChange} value={userFormData.password} required />
            if(!password) {
                Alert('Please enter a password')
            }
            <button type="submit" disabled={!(userFormData.email && userFormData.password)} variant='YAY!  YOU`RE LOGGED IN!'>Login</button>
        </form>
    )
}
 

export default LoginForm;