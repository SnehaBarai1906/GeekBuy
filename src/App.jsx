import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignIn from "./components/Signin";
import New from "./components/New";
import Bestseller from "./components/Bestseller";
import ProdDetails from "./components/ProdDetails";
import CartPage from "./components/Cart";
import LoginPage from "./components/LoginPage";

const App = () => {
  const [eComm, setEComm] = useState([]);

  async function fetchData() {
    let res = await fetch("http://localhost:3000/data");
    let data = await res.json();
    setEComm(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <br />

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New data={eComm} />} />
        <Route path="/bestseller" element={<Bestseller data={eComm} />} />
        <Route path="/product/:id" element={<ProdDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
      <br />
      <Footer />
    </Router>
  );
};

export default App;
