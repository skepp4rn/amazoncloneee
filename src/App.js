import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <ProductProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} /> 
          </Routes>
        </div>
      </ProductProvider>
    </Router>
  );
}

export default App;
