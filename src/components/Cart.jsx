import React, { useEffect, useState } from "react";
import "./Cart.css";

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((data) => setCart(data));
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Shopping Cart</h1>
      </header>
      <main>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Name & Detail</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <div>{item.title}</div>
                  {/* <div>Option: {item.option}</div> */}
                </td>
                <td>₹ {item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>₹ {(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total</td>
              <td>₹ {total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
        <div className="checkout-buttons">
          <button>Pay with PayPal</button>
          <button>Proceed to checkout</button>
        </div>
      </main>
    </div>
  );
}

export default CartPage;
