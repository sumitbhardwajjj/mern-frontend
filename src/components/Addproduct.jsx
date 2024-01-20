import React, { useState } from 'react';
import axios from 'axios';
import '../style/Addproduct.css'

// axios.defaults.headers.common["Authorization"] =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkR1bW15QGdtYWlsLmNvbSIsImlhdCI6MTcwMzg2MzMxMn0.t-lW-rpAXcUIVmGLDPnmGx7uOvV4IZ1lR1P0UuN4iiw";


const Addproduct = () => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    thumbnail: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProducts(product);
  };

  const addProducts = async (productData) => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('token');
      
      // Make the API call using the token
      const res = await axios.post('https://mern-backend-6o5r.onrender.com/products', productData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      console.log(res.data);
      // Optionally update the state or show a success message
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };
  

  return (

     <div className='form-container'>
     <form className='form' onSubmit={handleSubmit}>
      <div className='form-input'>
        <label>Title</label>
        <input id='title' name='title' type="text" value={product.title} onChange={handleChange} />
      </div>
      <div className='form-input'>
        <label>Price</label>
        <input id='price' name='price' type="number" value={product.price} onChange={handleChange} />
      </div>
      <div className='form-input'>
        <label>Thumbnail</label>
        <input id='thumbnail' name='thumbnail' type="text" value={product.thumbnail} onChange={handleChange} />
      </div>
      <button className='Button' type='submit'>Add</button>
    </form>
   </div>
  );
};

export default Addproduct;
