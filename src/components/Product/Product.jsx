import React from 'react';
import './Product.css'
const Product = ({ product,handleAddToCart }) => {
    const {name,picture,price} = product
    return (
      <div className="product">
        <img src={picture} alt="" />
        <h3>Name: {name}</h3>
        <p>price: $ {price}</p>
        <button onClick={()=> (handleAddToCart(product))}>
          Buy Now
        </button>
      </div>
    );
};

export default Product;