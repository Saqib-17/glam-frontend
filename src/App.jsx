import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Using Routes and Route
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ProductShowcase from './components/ProductShowcase';
import CategoryShowcase from './components/CategoryShowcase';
import TrendingOffers from './components/TrendingOffers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JewelleryGuides from './components/JewelleryGuides';
import Videos from './components/Videos';
import ComingSoon from './components/ComingSoon';  // Import the ComingSoon component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<LandingPage />} />
        {/* ComingSoon Route */}
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
};

// LandingPage Component for the homepage
const LandingPage = () => (
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

export default App;
