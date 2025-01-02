import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductShowcase from './components/ProductShowcase';
import CategoryShowcase from './components/CategoryShowcase';
import TrendingOffers from './components/TrendingOffers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JewelleryGuides from './components/JewelleryGuides';
import Videos from './components/Videos';

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <ProductShowcase />
      <CategoryShowcase />
      <JewelleryGuides />
      <TrendingOffers />
      <Videos />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
