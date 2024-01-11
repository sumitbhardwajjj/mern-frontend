import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

const Cart = () => {

    const Products = useSelector(state =>state.cart)
  return (
    <div>
        <Navbar/>
        <div className="container">
        {Products.map((item) => (
          <div className="product-card" key={item._id}>
            <div className="product-image">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="product-details">
              <h2 className="product-title">{item.title}</h2>
              <h4 className="product-price">{item.price}</h4>
              <button className="add-to-cart-btn">Remove From Cart</button>
              {/* <button
                className="view-btn"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
