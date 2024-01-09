import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
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
            const response = await axios.post('https://mern-backend-6o5r.onrender.com/signup/login', formData);
            console.log(response.data.token);
           
            if(response.data==="not"){
                alert("user not exist")
               
            }else{
                localStorage.setItem('token', response.data.token);
                navigate('/products')
            }
           
    
            // Store the token in local storage
         
    
            // Handle the token as needed, e.g., redirect user, etc.
    
        } catch (error) {
           
            console.error("Login failed:", error.response.data || error.message);
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Login</h4>
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
