import React from 'react';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import Footer from './components/Footer';

function App() {
  return (
    <ShopProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <ProductList />
        <CartModal />
        <Footer />
      </div>
    </ShopProvider>
  );
}

export default App;
