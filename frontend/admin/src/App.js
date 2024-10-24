import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import ListProduct from './pages/ListProduct';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/list-products" element={<ListProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
