import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // one time add
    const existProduct = cart.find((pd) => pd._id === product._id);
      if (existProduct) {
        toast("It's already added");
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
    }
  };
  const handleRemoveFromCart = (id) => {
    const rest = cart.filter((pd) => pd._id !== id);
    setCart(rest);
  };
  return (
    <div className="home-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
