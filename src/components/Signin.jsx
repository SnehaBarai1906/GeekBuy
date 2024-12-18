import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
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

    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setMessage("User already exists. Please log in.");
      return;
    }

    const newUser = { email, password };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          setMessage("User registered successfully!");
          setUsers((prev) => [...prev, newUser]);
          setEmail("");
          setPassword("");
        } else {
          setMessage("Error registering user.");
        }
      })
      .catch(() => setMessage("Error connecting to the server."));
  };

  return (
    <div className="app2">
      <main>
        <form onSubmit={handleSubmit} className="sign-in-form">
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
          <button type="submit">Sign In</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p>
          Already have an account?{" "}
          <button className="link-button" onClick={() => navigate("/login")}>
            Log In
          </button>
        </p>
      </main>
    </div>
  );
}

export default SignIn;
