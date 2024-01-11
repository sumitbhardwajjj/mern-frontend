import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../style/Signup.css'

const SignupComponent = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('https://mern-backend-6o5r.onrender.com/signup', formData);
            // Store the token in local storage
            localStorage.setItem('token', response.data.token);

            navigate('/')
    
            // Handle the token as needed, e.g., redirect user, etc.
    
        } catch (error) {
            console.error("Signup failed:", error.response.data || error.message);
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Sign up</h3>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                />
                <button className='Button' type="submit">Signup</button>
            </form>
          
        </div>
    );
};

export default SignupComponent;
