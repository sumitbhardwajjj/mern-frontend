import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
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
    
        } catch (error) {
           
            console.error("Login failed:", error.response.data || error.message);
        }
    };
    

    return (
        <div className='login-form'>       
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
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
               <Link className='lin' to='/signup'><div>New user ? <span>Register</span></div></Link>
                <button className='Button' type="submit">Login</button>
            </form> 
        </div>
    );
};

export default SignupComponent;
