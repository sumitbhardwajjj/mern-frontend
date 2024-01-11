import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/Navbar.css'
import { useSelector } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {

  const productLength = useSelector(state => state.cart)


  return (
  
     <nav className='nav'>
      <div>
        <h3><span>Home</span>Page</h3>
      </div>
   <div className='nav-1'><NavLink className='nav-8' to='/product'>Home</NavLink></div>
     <div className='nav-1'><NavLink className='nav-8' to='/products'>Product</NavLink></div>
     <div className='nav-1'><NavLink className='nav-8' to='/about'>About us</NavLink></div>
     <div className='nav-1'><NavLink className='nav-8' to='/cart'>Cart  {productLength.length}</NavLink></div>
     <div>
    <NavLink to='/'><h4><AccountCircleIcon id='icon'/></h4></NavLink>
   </div>
  
     </nav>
  
  )
}

export default Navbar
