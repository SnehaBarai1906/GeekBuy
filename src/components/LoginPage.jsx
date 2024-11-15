import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function LoginPage() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setMessage("Login successful!");
      navigate("/"); // Navigate to the home page or dashboard
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="app1">
      <main>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p>
          Don't have an account?{" "}
          <button className="link-button" onClick={() => navigate("/signin")}>
            Sign Up
          </button>
        </p>
      </main>
    </div>
  );
}

export default LoginPage;
