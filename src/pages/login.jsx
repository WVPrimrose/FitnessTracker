// use State? and use custom css or library css?
// import utils folder
// make sure the login doesn't refresh when user submits; need to have token and user identify;
import { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

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
            
        }
    
    
        setUserFormData({
            email: '',
            password: '',
        });
    }

}



return(
    <form>
        <label htmlFor="email"></label>
        <input type="text" />
        <label htmlFor="password"></label>
        <input type="text" />
        <button type="submit">Login</button>
    </form>
)