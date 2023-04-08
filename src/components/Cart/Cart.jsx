import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some Products</p>;
  } else {
    message = <p>Thanks for shopping</p>;
  }
  return (
    <div>
      <h3 className={cart.length === 1 ? "orange" : "bg-color"}>
        orderSummery: {cart.length}
      </h3>
      <h4>{message}</h4>
      {cart.length > 2 ? (
        <span className="bg-color">Buy More Products</span>
      ) : (
        <span className="orange">No money?</span>
      )}

      {cart.map((product) => (
        <div className="cart-section" key={product._id}>
          {product.name}
          <span>
            {" "}
            <button onClick={() => handleRemoveFromCart(product._id)}>X</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Cart;

/**
 * Conditional Rendering
 * 1. if else to set variable
 * 2. ternary operator : condition ? 'for true : 'for false'
 *
 *
 *
 *
 *
 */
