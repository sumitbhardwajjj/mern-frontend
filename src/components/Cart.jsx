import React from 'react'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart} from './CartSlice'

const Cart = () => {
  const dispatch = useDispatch();
  const Products = useSelector(state => state.cart.items);

  const removeHandler = (_id) => {
    console.log(_id) 
    dispatch(removeFromCart(_id));
   // Pass the id as an object
  };


  return (
    <div>
      <Navbar />
     <div className='wrapper'>
     <div className="container">
        {Products.map((item) => (
          <div className="product-card" key={item._id}>
            <div className="product-image">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="product-details">
              <h2 className="product-title">{item.title}</h2>
              <h4 className="product-price">{item.price}</h4>
              <button className="add-to-cart-btn" onClick={() => { removeHandler(item._id) }}>
                Remove From Cart
              </button>
            </div>
          </div>
        ))}

      </div>
     </div>
    </div>
  )
}

export default Cart
