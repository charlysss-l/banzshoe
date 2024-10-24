import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ViewProduct from './pages/ViewProduct';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/view-product" element={<ViewProduct/>}/>
      </Routes>
    </Router>
)};

export default App;
