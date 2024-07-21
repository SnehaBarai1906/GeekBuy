import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Carousel from './components/Carousel';
import SignIn from './components/Signin';

const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
      <Route path="/signin" element={<SignIn />} />  {/* Add the SignIn route */}
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
