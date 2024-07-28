import React, { useState } from "react";
import "./Cart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartPage = ({ cart, setCart }) => {
  const [selectAll, setSelectAll] = useState(true);

  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Product Name & Detail</h2>
      <div className="cart-header">
        <input
          type="checkbox"
          checked={selectAll}
          onChange={(e) => setSelectAll(e.target.checked)}
        />
        <span> Select All</span>
        <span className="cart-header-unit-price">Unit Price</span>
        <span className="cart-header-quantity">Quantity</span>
        <span className="cart-header-total">Total</span>
        <span className="cart-header-operation">Operation</span>
      </div>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <input type="checkbox" checked={selectAll} />
          <div className="cart-item-details">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>Ship From: China</p>
              <p>Option: Grey 128GB TF Card</p>
            </div>
          </div>
          <div className="cart-item-price">₹{item.price.toFixed(2)}</div>
          <div className="cart-item-quantity">
            <button onClick={() => handleQuantityChange(item.id, -1)}>
              <RemoveIcon />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, 1)}>
              <AddIcon />
            </button>
          </div>
          <div className="cart-item-total">
            ₹{(item.price * item.quantity).toFixed(2)}
          </div>
          <div className="cart-item-operation">
            <button onClick={() => handleRemoveItem(item.id)}>Delete</button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <button onClick={() => setCart([])}>Continue Shopping</button>
        <div className="cart-total">
          <p>You choose {cart.length} item(s)</p>
          <p>Total: ₹{totalPrice.toFixed(2)}</p>
          <button className="paypal-btn">Pay with PayPal</button>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

