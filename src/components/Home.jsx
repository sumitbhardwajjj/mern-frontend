import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8080";
// axios.defaults.headers.common["Authorization"] =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkR1bW15QGdtYWlsLmNvbSIsImlhdCI6MTcwMzg2MzMxMn0.t-lW-rpAXcUIVmGLDPnmGx7uOvV4IZ1lR1P0UuN4iiw";

const Home = () => {
  const [products, setProducts] = useState([]);



 // Helper function to fetch products
const fetchProducts = async (url) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

// Delete a product by ID
const handleDelete = async (id) => {
  try {
    await axios.delete(`https://mern-backend-6o5r.onrender.com/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setProducts(products.filter(product => product._id !== id));
  } catch (error) {
    console.error("Error deleting product:", error.message);
  }
};

// Fetch products on component mount
useEffect(() => {
  const fetchData = async () => {
    try {
      const products = await fetchProducts('https://mern-backend-6o5r.onrender.com/products');
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  fetchData();
}, []);

// Sort products based on the selected option
const handleSort = async (e) => {
  const value = e.target.value;
  let sortParam = "";

  switch (value) {
    case "1":
      sortParam = "?price=1";
      break;
    case "-1":
      sortParam = "?price=-1";
      break;
    case "2":
      sortParam = "?title=1";
      break;
    case "-2":
      sortParam = "?title=-1";
      break;
    default:
      break;
  }

  try {
    const products = await fetchProducts(`http://localhost:8080/products/${sortParam}`);
    setProducts(products);
  } catch (error) {
    console.error("Error sorting products:", error.message);
  }
};



  return (
    <>
      <select onChange={handleSort}>
        <option value="1">Price low to high</option>
        <option value="-1">Price high to low</option>
        <option value="2">title low to high</option>
        <option value="-2">title high to low</option>
      </select>
      <div className="container">
        {products.map((item) => (
          <div className="product-card" key={item._id}>
            <div className="product-image">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="product-details">
              <h2 className="product-title">{item.title}</h2>
              <h4 className="product-price">{item.price}</h4>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button
                className="view-btn"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    
    </>
  );
};

export default Home;
