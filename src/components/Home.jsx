import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../style/Home.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart,toggleDarkMode } from "./CartSlice";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Home = ({darkMode}) => {

       const dispatch = useDispatch()

       const toogle = ()=>{
        dispatch(toggleDarkMode())
      }
    

  const [products, setProducts] = useState([]);

  // Helper function to fetch products
  const fetchProducts = async (url) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  // Delete a product by ID
  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`https://mern-backend-6o5r.onrender.com/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     setProducts(products.filter((product) => product._id !== id));
  //   } catch (error) {
  //     console.error("Error deleting product:", error.message);
  //   }
  // };

  // Fetch products on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts(
          "https://mern-backend-6o5r.onrender.com/products"
        );
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
      const products = await fetchProducts(
        `https://mern-backend-6o5r.onrender.com/products/${sortParam}`
      );
      setProducts(products);
    } catch (error) {
      console.error("Error sorting products:", error.message);
    }
  };

  const addHandler = (item)=>{
   dispatch(addToCart(item))
  }



  return (
    <div>
      <Navbar/>
      
      <div className="wrapper">
      <div className="slidebar">
        <select onChange={handleSort}>
          <option value="1">Price low to high</option>
          <option value="-1">Price high to low</option>
          <option value="2">title low to high</option>
          <option value="-2">title high to low</option>
        </select>
        <Link className="lin" to="/add">
        <div className="lists">
           <AddCircleIcon className="icon"/><span> Add Products </span> 
        </div>
        </Link>
        <div className="lists">
          <DarkModeIcon className="icon" onClick={()=>{toogle(darkMode)}} /><spa>DarkMode</spa>
        </div>
      </div>
      <div className="container">
        {products.map((item) => (
          <div className="product-card" key={item._id}>
            <div className="product-image">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="product-details">
              <h2 className="product-title">{item.title}</h2>
              <h4 className="product-price">{item.price}</h4>
              <button onClick={()=>{addHandler(item)}} className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
