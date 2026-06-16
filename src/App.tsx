import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Customize from './pages/Customize';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
