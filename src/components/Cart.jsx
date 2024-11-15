import React, { useEffect, useState } from "react";
import "./Cart.css";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.error("Error fetching cart data:", error));
  }, []);

  const removeFromCart = (id) => {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error removing item from cart:", error));
  };

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <div className="app">
      <main>
        <div className="cart-container">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.title || "Product Image"}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{item.title || "Unknown Product"}</h2>
                <p className="cart-item-price">Price: ₹ {(item.price || 0).toFixed(2)}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity || 0}</p>
                <p className="cart-item-total">
                  Total: ₹ {((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                </p>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Total: ₹ {total.toFixed(2)}</h2>
          <div className="checkout-buttons">
            <button>Pay with PayPal</button>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CartPage;
