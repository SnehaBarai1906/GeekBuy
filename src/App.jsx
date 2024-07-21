import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Home from './Pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Carousel from './components/Carousel';

const App = () => {
  return (
    <Router>
      <Header />
      <Carousel />
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
