import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/Navbar.css'
import { useSelector } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {

  const productLength = useSelector(state => state.cart.items)


  return (
  
     <nav className='nav'>
      <div>
        <h3><span>Home</span>Page</h3>
      </div>
   <div className='nav-1'>Home</div>
     <div className='nav-1'><NavLink className='nav-8' to='/products'>Products</NavLink></div>
     <div className='nav-1'>About us</div>
     <div className='nave'><NavLink className='nav-8' to='/cart'><ShoppingCartIcon/><div className='notification' >{productLength.length}</div></NavLink></div>
     <div>
    <NavLink to='/'><h4><AccountCircleIcon id='icon'/></h4></NavLink>
   </div>
     </nav>
  
  )
}

export default Navbar
