import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../style/Signup.css'
import { Bounce, ToastContainer, toast } from 'react-toastify';


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
      
          if (response.data === 'exist') {
            toast.error('User already exists');
          } else {
            const { token } = response.data;
            localStorage.setItem('token', token);
            
            toast.success("Account created");
      
            setTimeout(() => {
              navigate('/');
            }, 3000);
          }
        } catch (error) {
          console.error('Signup failed:', error.response?.data || error.message);
        }
      };
      
      
    return (
        <div className='login-form'>
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
            <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  transition={Bounce}
/>

        </div>
    );
};

export default SignupComponent;
