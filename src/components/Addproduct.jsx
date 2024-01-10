import React, { useState } from 'react';
import axios from 'axios';
import '../style/Addproduct.css'
// axios.defaults.headers.common["Authorization"] =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkR1bW15QGdtYWlsLmNvbSIsImlhdCI6MTcwMzg2MzMxMn0.t-lW-rpAXcUIVmGLDPnmGx7uOvV4IZ1lR1P0UuN4iiw";

const fetchProducts = async (url) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};


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

  const addProducts =  async (productData) => {
    try {
      const res = await fetchProducts('https://mern-backend-6o5r.onrender.com/products', productData);
      console.log(res.data);
      // Optionally update the state or show a success message
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input id='title' name='title' type="text" value={product.title} onChange={handleChange} />
      </div>
      <div>
        <label>Price</label>
        <input id='price' name='price' type="number" value={product.price} onChange={handleChange} />
      </div>
      <div>
        <label>Thumbnail</label>
        <input id='thumbnail' name='thumbnail' type="text" value={product.thumbnail} onChange={handleChange} />
      </div>
      <button type='submit'>Add</button>
    </form>
  );
};

export default Addproduct;
